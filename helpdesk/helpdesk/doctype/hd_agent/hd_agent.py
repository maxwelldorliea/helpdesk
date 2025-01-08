# Copyright (c) 2022, Frappe Technologies and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from pypika.terms import Criterion
from pypika.queries import Query


class HDAgent(Document):
    def before_save(self):
        if self.name == self.user:
            return

        self.name = self.user
        self.set_user_roles()

    def set_user_roles(self):
        user = frappe.get_doc("User", self.user)
        for role in ["Agent"]:
            user.append("roles", {"role": role})
        user.save()

    @staticmethod
    def default_list_data():
        columns = [
            {
                "label": "Agent Name",
                "key": "agent_name",
                "width": "17rem",
                "type": "Data",
            },
            {
                "label": "Email",
                "key": "email",
                "width": "24rem",
                "type": "Data",
            },
            {
                "label": "Created On",
                "key": "creation",
                "width": "8rem",
                "type": "Datetime",
            },
        ]
        rows = [
            "name",
            "is_active",
            "user.full_name",
            "user.user_image",
            "user.email",
            "user.username",
            "modified",
            "creation",
        ]
        return {"columns": columns, "rows": rows}


@frappe.whitelist()
def create_hd_agent(first_name, last_name, email, signature, team):
    if frappe.db.exists("User", email):
        user = frappe.get_doc("User", email)
    else:
        user = frappe.get_doc(
            {
                "doctype": "User",
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
                "email_signature": signature,
            }
        ).insert()

        user.send_welcome_mail_to_user()

    return frappe.get_doc(
        {"doctype": "HD Agent", "user": user.name, "group": team}
    ).insert()


    @staticmethod
    def get_list_filters(query: Query):
        QBTeam = frappe.qb.DocType("HD Team")
        QBTeamMember = frappe.qb.DocType("HD Team Member")
        QBAgent = frappe.qb.DocType("HD Agent")
        user = frappe.session.user
        teams = (
            frappe.qb.from_(QBTeamMember)
            .where(QBTeamMember.user == user)
            .join(QBTeam)
            .on(QBTeam.name == QBTeamMember.parent)
            .select(QBTeam.user, QBTeam.team_name, QBTeam.ignore_restrictions)
            .run(as_dict=True)
        )
        can_ignore_restrictions = (
            len(list(filter(lambda x: x.ignore_restrictions, teams))) > 0
        )

        if can_ignore_restrictions:
            return query

        conditions = [QBAgent.name == team.user for team in teams]
        query =  query.where(Criterion.any(conditions))
        return query

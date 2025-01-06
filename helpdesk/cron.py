import frappe

def reset_ticket_name_count():
    frappe.db\
    .set_single_value("HD Settings", fieldname="current_count", value=1)

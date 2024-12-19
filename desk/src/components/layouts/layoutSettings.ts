import LucideBookOpen from "~icons/lucide/book-open";
import LucideCloudLightning from "~icons/lucide/cloud-lightning";
import LucideContact2 from "~icons/lucide/contact-2";
import LucideTicket from "~icons/lucide/ticket";
import LucideUser from "~icons/lucide/user";
import LucideLayoutGrid from "~icons/lucide/layout-grid";
import { OrganizationsIcon } from "../icons";
import LucideUsers from "~icons/lucide/users";
import {
  AGENT_PORTAL_AGENT_LIST,
  AGENT_PORTAL_CONTACT_LIST,
  AGENT_PORTAL_CUSTOMER_LIST,
  AGENT_PORTAL_TEAM_LIST,
  AGENT_PORTAL_TICKET_LIST,
  AGENT_PORTAL_DASHBOARD,
} from "@/router";

export const agentPortalSidebarOptions = [
  {
    label: "Dashboard",
    icon: LucideLayoutGrid,
    to: AGENT_PORTAL_DASHBOARD,
  },
  {
    label: "Tickets",
    icon: LucideTicket,
    to: AGENT_PORTAL_TICKET_LIST,
  },
  {
    label: "Customers",
    icon: OrganizationsIcon,
    to: AGENT_PORTAL_CUSTOMER_LIST,
  },
  {
    label: "Contacts",
    icon: LucideContact2,
    to: AGENT_PORTAL_CONTACT_LIST,
  },
  {
    label: "Agents",
    icon: LucideUser,
    to: AGENT_PORTAL_AGENT_LIST,
  },
  {
    label: "Teams",
    icon: LucideUsers,
    to: AGENT_PORTAL_TEAM_LIST,
  },
  {
    label: "Knowledge base",
    icon: LucideBookOpen,
    to: "DeskKBHome",
  },
  {
    label: "Canned responses",
    icon: LucideCloudLightning,
    to: "CannedResponses",
  },
];

export const customerPortalSidebarOptions = [
  {
    label: "Tickets",
    icon: LucideTicket,
    to: "TicketsCustomer",
  },
  {
    label: "Knowledge base",
    icon: LucideBookOpen,
    to: "KnowledgeBasePublicNew",
  },
];

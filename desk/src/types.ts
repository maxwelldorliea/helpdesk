import { Component } from "vue";

export interface Resource<A = unknown> {
  auto: boolean;
  loading: boolean;
  data: A;
  pageLength: number;
  totalCount: number;
  hasNextPage: boolean;
  list: {
    loading: boolean;
  };
  next: () => void;
  reload: () => void;
  update: (r: unknown) => void;
}

export interface Comment {
  commented_by: string;
  content: string;
  is_pinned: boolean;
  name: string;
  creation: string;
}

export interface Communication {
  creation: string;
  content: string;
  name: string;
  sender: string;
  bcc?: string;
  cc?: string;
}

export interface Activity {
  action: string;
  name: string;
  owner: string;
  creation: string;
}

export interface Contact {
  full_name: string;
  name: string;
  company_name?: string;
  email_id?: string;
  image?: string;
  mobile_no?: string;
  phone?: string;
}

export interface CustomField {
  fieldname: string;
  label: string;
  value: string;
  route: string;
}

export interface ViewLog {
  name: string;
  viewed_by: string;
  creation: string;
}

export interface Ticket {
  _assign: string;
  assignee: UserInfo;
  agent_group: string;
  customer: string;
  modified: string;
  name: string;
  priority: string;
  raised_by: string;
  resolution_by: string;
  response_by: string;
  first_responded_on: string;
  resolution_date: string;
  status: string;
  subject: string;
  ticket_type: string;
  via_customer_portal: string;
  agreement_status: string;
  creation: string;
  feedback_rating?: number;
  feedback_text?: string;
  feedback_extra?: string;
  contact: Contact;
  comments: Comment[];
  communications: Communication[];
  history: Activity[];
  template: Template;
  views: ViewLog[];
}

export interface DocField {
  fieldname: string;
  fieldtype: string;
  label: string;
  name: string;
  options: string;
}

export interface Filter {
  field?: DocField;
  fieldname: string;
  operator: string;
  label: string;
  value: boolean | number | string;
}

export interface AutoCompleteItem {
  label: string;
  value: string;
}

export interface Field {
  fieldname: string;
  fieldtype: string;
  hide_from_customer: 0 | 1;
  label: string;
  options: string;
  required: 0 | 1;
  description?: null;
  url_method?: string;
}

export type FieldValue = string | number | boolean;

export interface Template {
  about: string;
  fields: Field[];
}

export type Column = {
  key: string;
  label: string;
  icon?: string;
  align?: string;
  width?: string;
  text?: string;
};

export type File = {
  file_name: string;
  name: string;
  file_url: string;
  is_private: boolean;
  attached_to_doctype?: string;
  attached_to_field?: string;
  attached_to_name?: string;
};

export type Notification = {
  creation: string;
  name: string;
  notification_type: string;
  read: boolean;
  reference_comment: string;
  reference_ticket: string;
  user_from: UserInfo;
  user_to: UserInfo;
};

export type UserInfo = {
  email: string;
  image: string;
  name: string;
};

export interface RenderField {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  description?: string;
}

export interface EmailService {
  name: string;
  icon: string;
  info: string;
  link: string;
  custom: boolean;
}

export type EmailStep = "email-list" | "email-add" | "email-edit";

export interface EmailAccount {
  email_account_name: string;
  email_id: string;
  service: string;
  api_key?: string;
  api_secret?: string;
  password?: string;
  frappe_mail_site?: string;
  enable_outgoing?: boolean;
  enable_incoming?: boolean;
  default_outgoing?: boolean;
  default_incoming?: boolean;
}

export type TicketTab = "activity" | "email" | "comment" | "details";

export interface TabObject {
  name: TicketTab;
  label: string;
  icon: Component;
  condition?: () => boolean;
}

export interface RootCategory {
  category_id: string;
  category_name: string;
}

export interface Article {
  name: string;
  title: string;
  category: string;
  published_on: string;
  author: string;
  subtitle: string;
  article_image: string | null;
  _user_tags: string | null;
}

export interface SubCategory {
  name: string;
  category_name: string;
  icon: string | null;
  articles: Article[];
}

export interface Author {
  name: string;
  image: string | null;
  email?: string;
}

export interface Category {
  categoryName: string;
  subCategories: SubCategory[];
  articles: Article[];
  authors?: {
    [key: string]: Author;
  };
  children?: (Article | SubCategory)[];
}

// Badge
export interface BadgeStatus {
  label: string;
  theme: string;
}

export type FeedbackAction = 0 | 1 | 2; // 0: neutral, 1: like, 2: dislike

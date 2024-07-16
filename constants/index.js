export const ROLES = ["ADMIN", "MODERATOR", "AUTHOR", "CONTRIBUTOR", "USER"];

export const OPTION_ROLES = ROLES.map((role) => ({ label: role, value: role })).reverse();

export const STATUS = ["pending", "published", "rejected"];
export const STATUS_COLORS = {
  pending: "warning",
  published: "success",
  rejected: "danger",
};

export const SPECIALTIES = [
  {
    label: "Select specialty",
    value: "",
  },
  {
    label: "Economy",
    value: "Economy",
  },
  {
    label: "Technology",
    value: "Technology",
  },
  {
    label: "AI",
    value: "AI",
  },
  {
    label: "Review",
    value: "Review",
  },
  {
    label: "Others",
    value: "Others",
  },
]


export const toolbarOptions = [
  [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'font': [] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{color: []}, {background: []}],
  [{ size: [] }],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  [{ 'list': 'ordered' }, { 'list': 'bullet' },
  { 'indent': '-1' }, { 'indent': '+1' }],
  ['link', 'image', 'video'],
  ['clean']
]

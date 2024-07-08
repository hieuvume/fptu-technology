export const ROLES = ["ADMIN", "MODERATOR", "AUTHOR", "CONTRIBUTOR", "USER"];

export const OPTION_ROLES = ROLES.map((role) => ({ label: role, value: role })).reverse();

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
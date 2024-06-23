export const ROLES = ["ADMIN", "MODERATOR", "AUTHOR", "CONTRIBUTOR", "USER"];

export const OPTION_ROLES = ROLES.map((role) => ({ label: role, value: role })).reverse();
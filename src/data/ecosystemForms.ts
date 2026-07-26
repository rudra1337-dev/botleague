import type { FormFieldConfig, SignupRole } from "@/types";

export const signupFieldConfig: FormFieldConfig[] = [
  { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
  { name: "location", label: "Location", type: "text", required: true, placeholder: "City, State" },
  { name: "enroll", label: "Enroll", type: "text", required: true, placeholder: "Team / affiliation" },
];

export const ecosystemRoles: { role: SignupRole; title: string }[] = [
  { role: "judge", title: "Become a Judge" },
  { role: "volunteer", title: "Volunteer" },
  { role: "member", title: "Community Member" },
];

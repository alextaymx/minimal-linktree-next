import usersData from "@/data/users.json";

export type SocialItem = {
  label: string;
  href: string;
  subtitle?: string;
};

export type UserProfile = {
  name: string;
  role: string;
  company: string;
  bio: string;
  avatarUrl: string;
  vcfUrl?: string;
  contact: {
    email?: string;
    phone?: string;
    location?: string;
    website?: string;
  };
  social: SocialItem[];
};

export type UsersData = {
  [username: string]: UserProfile;
};

export const users: UsersData = usersData;

export function getUser(username: string): UserProfile | null {
  return users[username] || null;
}

export function getAllUsernames(): string[] {
  return Object.keys(users);
}

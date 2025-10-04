type UserRole = "guest" | "member" | "admin";

type Individual = {
  username: string;
  role: "guest" | "member" | "admin";
};

let userRole: UserRole = "admin";

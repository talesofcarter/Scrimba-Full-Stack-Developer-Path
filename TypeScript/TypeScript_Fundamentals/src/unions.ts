type UserRole = "guest" | "member" | "admin";

type User = {
  username: string;
  role: "guest" | "member" | "admin";
};

let userRole: UserRole = "admin";

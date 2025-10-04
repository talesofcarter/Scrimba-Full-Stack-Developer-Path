type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin" | "founder" | "Software Engineer";
};

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_smith", role: "contributor" },
  { id: nextUserId++, username: "alice_jones", role: "admin" },
  { id: nextUserId++, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    console.error("user not found!");
    return;
  }
  return Object.assign(foundUser, updates);
}

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };

  users.push(user);
  return user;
}

addNewUser({ username: "Kelvin Juma", role: "Software Engineer" });

console.log(updateUser(4, { role: "contributor" }));
console.log(updateUser(1, { role: "founder" }));
console.log(users);

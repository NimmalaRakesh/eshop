import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin user",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "ganeshnimmala",
    email: "ganeshnimmla@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "rakeshnimmala",
    email: "rakeshnimmala@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];

export default users;

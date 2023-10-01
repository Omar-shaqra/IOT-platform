const bcrypt = require("bcryptjs");

const users = [
  {
    fullname: "Abdo Ehab",
    email: "abdo@example.com",
    password: bcrypt.hashSync("12345", 10),
    phone: "0115684894",
  },
];

module.exports = users;

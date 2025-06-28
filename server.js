const express = require("express");
const bodyParser = require("body-parser");
//const db = require("./db");
const app = express();
//const PORT = 3000;
//const bcrypt = require("bcrypt");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// app.get("/registration", (req, res) => {
//   res.render("registration"); // This looks for `views/register.ejs`
// });
// app.get("/login", (req, res) => {
//   res.render("login"); // This looks for `views/register.ejs`
// });
// app.get("/index", (req, res) => {
//   res.render("index"); // This looks for `views/register.ejs`
// });
// Home Route
app.get("/", (req, res) => {
  res.render("index");
});

// Form Submission Route

// app.post("/register", async (req, res) => {
//   const { Name, Username, Email, Number, Password, ConformPassword, gender } =
//     req.body;
//   // 1. Check email is valid or not
//   const emailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailvalid.test(Email)) {
//     return res.json({
//       success: false,
//       message: "Please enter a valid email address.",
//     });
//   }
//   // 2. Validate password strength
//   const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
//   if (!passwordRegex.test(Password)) {
//     return res.json({
//       success: false,
//       message:
//         "Password must be at least 6 characters long, include at least one uppercase letter and one special character.",
//     });
//   }
//   // 3. Check if password and confirm password match
//   if (Password !== ConformPassword) {
//     return res.json({
//       success: false,
//       message: "Password and confirm password do not match.",
//     });
//   }
//   // 4. Check Gender is checked
//   if (!gender || gender === "null") {
//     return res.json({
//       success: false,
//       message: "Please select gender.",
//     });
//   }

//   try {
//     // 5. Hash the password
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(Password, saltRounds);

//     const sql =
//       "INSERT INTO tbl_personal (fullname, username, email, phonenumber, password, gender) VALUES (?, ?, ?, ?, ?, ?)";

//     db.query(
//       sql,
//       [Name, Username, Email, Number, hashedPassword, gender],
//       (err, result) => {
//         if (err) {
//           console.error("DB Error:", err);
//           return res.json({
//             success: false,
//             message: "Registration failed. Try again.",
//           });
//         }

//         res.json({
//           success: true,
//           message: "Registration successful!",
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Encryption Error:", error);
//     res.json({
//       success: false,
//       message: "Something went wrong during registration.",
//     });
//   }
// });

// // New Route to View Records
// app.get("/RegistrationView", (req, res) => {
//   const sql = "SELECT * FROM tbl_personal ORDER BY id ASC";
//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error("Error fetching records:", err);
//       res.status(500).send("Server error");
//     } else {
//       res.render("RegistrationView", { users: results });
//     }
//   });
// });

// app.post("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   const sql = "DELETE FROM tbl_personal WHERE id = ?";

//   db.query(sql, [id], (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.json({ success: false, message: "Database error" });
//     }
//     res.json({ success: true });
//   });
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

import jwt from "jsonwebtoken";
import express from "express";
import { db } from "../db.js";
const router = express.Router();
import { emailTransporter } from "../utils/emailTransporter.js";
router.post("/addUser", async (req, res) => {
  // Retrieve user data from request body
  const { firstName, lastName, email, password } = req.body;
  // Query to check if the user already exists
  const checkUserQuery = `SELECT * FROM users WHERE emailUser = ?`;
  // Execute the query
  db.query(checkUserQuery, [email], (err, result) => {
    if (err) {
      // Error occurred while checking user existence
      console.log("Error checking user:", err);
      res.status(500).send("Error checking user");
    } else {
      if (result.length > 0) {
        // User already exists
        res.status(400).send("That email already exists!");
      } else {
        // User does not exist, send verification email
        const mailOptions = {
          from: "nadirmouradi.15@gmail.com",
          to: email,
          subject: "Welcome to SafeRent - Verify Your Account",
          html: `
            <h1>Thanks for registering with SafeRent</h1>
            <br>
            <p>Please click the following link to verify your account:</p>
            <br>
            <br><a href="http://localhost:8000/api/verifyAccount?email=${email}">Click here to login</a>
            <br>
            <p>If you didn't request this verification, please ignore this email.</p>
          `,
        };

        emailTransporter.sendMail(mailOptions, function (error) {
          if (error) {
            // Error sending email
            console.log("Error sending email:", error);
            res.status(500).send("Error sending email");
          } else {
            // Email sent successfully, insert the user into the database
            const insertUserQuery =
              "INSERT INTO users(firstNameUser, lastNameUser, emailUser, passwordUser) VALUES (?, ?, ?, ?)";
            db.query(
              insertUserQuery,
              [firstName, lastName, email, password],
              (err, result) => {
                if (err) {
                  // Error occurred while inserting user
                  console.log("Error inserting user:", err);
                  res.status(500).send("Error inserting user");
                } else {
                  // User inserted successfully, generate JWT token
                  console.log("User inserted:", result);
                  const token = jwt.sign({ email }, "secret-key", {
                    expiresIn: "1h",
                  });
                  res
                    .status(200)
                    .send({ message: "User registered successfully", token });
                }
              }
            );
          }
        });
      }
    }
  });
});

router.get("/verifyAccount", async (req, res) => {
  const { email } = req.query;

  const updateUserQuery =
    "UPDATE users SET accountVerified = 1 WHERE emailUser = ?";
  db.query(updateUserQuery, [email], (err, result) => {
    if (err) {
      console.log("Error updating user:", err);
      res.status(500).send("Error updating user");
    } else {
      console.log("User account verified:", result);
      res.status(200).send("User account verified successfully");
    }
  });
});
router.get("/user", async (req, res) => {
  const { email } = req.query;

  const getUserQuery = "SELECT * FROM users WHERE emailUser = ?";
  db.query(getUserQuery, [email], (err, result) => {
    if (err) {
      console.log("Error retrieving user:", err);
      res.status(500).send("Error retrieving user");
    } else {
      if (result.length > 0) {
        const user = result[0];
        res.status(200).json(user);
      } else {
        res.status(404).send("User not found");
      }
    }
  });
});
router.get('/verifyToken', async (req, res) => {
  const { token } = req.query;

  try {
    const decodedToken = jwt.verify(token, 'secret-key');
    const email = decodedToken.email;
    const getUserQuery = 'SELECT * FROM users WHERE emailUser = ?';
    db.query(getUserQuery, [email], (err, result) => {
      if (err) {
        console.log('Error retrieving user:', err);
        res.status(500).send('Error retrieving user');
      } else {
        if (result.length > 0) {
          const user = result[0];
          res.status(200).json(user);
        } else {
          res.status(404).send('User not found');
        }
      }
    });
  } catch (error) {
    console.log('Error verifying token:', error);
    res.status(401).send('Invalid token');
  }
});

router.post("/loginUser", async (req, res) => {
  const { email, password } = req.body;
  const selectEmailPass = `SELECT * FROM users WHERE emailUser = ? AND passwordUser = ?`;
  db.query(selectEmailPass, [email, password], (err, result) => {
    if (err) {
      console.log("Error selecting user:", err);
      res.status(500).send("Error selecting user");
    } else {
      if (result.length > 0) {
        console.log("User validated:", result);
        const token = jwt.sign({ email }, "jwtPrivateKey", { expiresIn: "1h" });

        res.status(200).send({ token });
      } else {
        console.log("Invalid email or password");
        res.status(400).send("Invalid email or password");
      }
    }
  });
});


const userRoutes = router;

export default userRoutes;

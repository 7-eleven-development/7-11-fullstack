import express from "express";
import jwt from "jsonwebtoken";
import verifyJWT from "../../controllers/middleware/verifyJWT.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await req.pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  const { company_id, firstname, surname, password, email, phonenumber, device_id, role } = req.body;

  const saltRounds = 10;

  const password_hash = await bcrypt.hash(password, saltRounds);

  try {
    const result = await req.pool.query(
      `INSERT INTO users (company_id, firstname, surname, password_hash, email, phonenumber, device_id, role)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [company_id, firstname, surname, password_hash, email, phonenumber, device_id, role || 'user']
    );
    res.status(201).json({ message: `User registered: ${email}`});
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const result = await req.pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length === 0){
      return res.status(401).json({ error: "Wrong email or password."});
    }

    const user = result.rows[0];

    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      return res.status(401).json({ error: "Wrong email or password."});
    }

    // if(user.role==="user"){

    // }

    const token = jwt.sign({email: email, device_id: user.device_id }, process.env.JWT_SECRET || "yoheybro", {
      expiresIn: "1h",
    });

    res.json({ message: "Login succesful!", token: token, device_id: user.device_id });

  } catch (err) {
    next(err);
  }
});

router.get("/protected", verifyJWT, (req, res) => {

})

export default router;

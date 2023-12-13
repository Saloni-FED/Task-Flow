import Users from "../models/users.js";

// Sign Up
export const signup = async (req, res) => {
  console.log(req.body);

  try {
    const users = await Users.create({ ...req.body });
    res.json({result:users});
  } catch (error) {
    console.error(error);
  }
};

// Sign in
export const signin = (req, res) => {
  res.send("fake signin section");
  const body = req.body;
  console.log(body);
};

const { Router } = require("express");
const userModel  = require("../models/register");

const authRouter = Router();

authRouter.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.login(email, password);
    res.status(200).json(user)

  } 
  catch (error) {
    res.status(400).json({error:error.message})
  }
});

module.exports = authRouter;
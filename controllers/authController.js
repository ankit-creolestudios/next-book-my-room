import User from "../models/user";
const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const newUser = User.create({
      name,
      email,
      password,
      phone,
      avatar: {
        public_id: "PUBLIC_ID",
        url: "URL",
      },
    });
    res.status(200).json({
      sucess: true,
      message: "User register success",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
export { registerUser };

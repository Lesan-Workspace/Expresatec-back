const admin = require("../config/firebase-config");

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });

    // Opcional: Puedes realizar alguna acción adicional con el usuario recién registrado

    res.status(200).json({ message: "User registered ", user:user.email });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await admin.auth().getUserByEmail(email);
    const token = await admin.auth().createCustomToken(user.uid);

    res.status(200).json({ token ,user});
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { registerUser, loginUser };

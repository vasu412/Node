const express = require("express");
const app = express();

app.use(express.json());
const regix = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

const checkName = (req, res, next) => {
  const { name } = req.body;
  for (var i = 0; i < name.length; i++) {
    if (
      (name[i] === " " &&
        i !== name.length - 1 &&
        name[i + 1] === name[i + 1].toLowerCase()) ||
      name[0] === name[0].toLowerCase()
    ) {
      return res.json({
        message:
          "First letter of both the first name and last name must be capital.",
      });
    }
  }
  next();
};

const checkPass = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 8) {
    return res.json({
      message: "password should has a minimum length of 8 characters.",
    });
  } else if (!regix.test(password)) {
    return res.json({
      message:
        "password must contains at least one special character, one uppercase letter, and one numeric character",
    });
  }
  next();
};

const checkEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email.includes("@")) {
    return res.json({
      message: "email should contain @.",
    });
  }
  next();
};

const checkContact = (req, res, next) => {
  const { number } = req.body;
  if (number.length < 10) {
    return res.json({
      message: "phone number is too short,",
    });
  }
  next();
};

app.use(checkName);
app.use(checkPass);
app.use(checkEmail);
app.use(checkContact);

app.post("/api/form", (req, res) => {
  console.log(req.body);
  res.json({
    res: "form has been submitted",
  });
});

app.listen(4120, () => {
  console.log("Server is running on port 4120");
});

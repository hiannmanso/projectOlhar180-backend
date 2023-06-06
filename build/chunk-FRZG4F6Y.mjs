import {
  auth_repository_default
} from "./chunk-VB4VWCP7.mjs";
import {
  generateToken
} from "./chunk-J4WRYM7L.mjs";

// src/services/auth.service.ts
import bcrypt from "bcrypt";
async function signUp(data) {
  const checkEmailIsValid = await auth_repository_default.getByEmail(data.email);
  console.log(data.email);
  if (checkEmailIsValid) {
    throw {
      status: 401,
      message: `This email is already in use.`
    };
  }
  await auth_repository_default.insert(
    data.email,
    bcrypt.hashSync(data.password, 10),
    data.username
  );
}
async function signIN(email, password) {
  const checkEmailIsValid = await auth_repository_default.getByEmail(email);
  if (!checkEmailIsValid) {
    throw {
      status: 404,
      message: `This email  is not registered.`
    };
  }
  if (!bcrypt.compareSync(password, checkEmailIsValid.password)) {
    throw {
      status: 406,
      message: `Incorrect password or email.`
    };
  }
  const token = generateToken(checkEmailIsValid.id);
  return token;
}

export {
  signUp,
  signIN
};

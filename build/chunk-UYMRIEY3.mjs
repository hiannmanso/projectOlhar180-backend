import {
  signIN,
  signUp
} from "./chunk-FRZG4F6Y.mjs";

// src/controllers/auth.controller.ts
async function signUpPOST(req, res) {
  const data = req.body;
  await signUp(data);
  res.status(201).send(`Your account have been created!`);
}
async function signInGET(req, res) {
  const { email, password } = req.body;
  const token = await signIN(email, password);
  res.status(200).send({ token });
}

export {
  signUpPOST,
  signInGET
};

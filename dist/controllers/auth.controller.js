import { signIN, signUp } from '../services/auth.service';
export async function signUpPOST(req, res) {
    const data = req.body;
    console.log(data, 'DATAAAAAAAAAAA');
    await signUp(data);
    res.status(201).send(`Your account have been created!`);
}
export async function signInGET(req, res) {
    const { email, password } = req.body;
    const token = await signIN(email, password);
    res.status(200).send({ token });
}

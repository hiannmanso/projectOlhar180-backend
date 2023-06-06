export function handleError(error, req, res, next) {
    console.log(error);
    if (error.status && error.message) {
        return res.status(error.status).send(error.message);
    }
    res.status(500);
}

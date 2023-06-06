import "../chunk-SOEV5HRE.mjs";

// src/middlewares/validateToken.ts
function validateToken(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(422).send(error.details.map((detail) => detail.message));
    }
    next();
  };
}
export {
  validateToken
};

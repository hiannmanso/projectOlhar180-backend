// src/schemas/task.schema.ts
import Joi from "joi";
var taskSchema = Joi.object({
  id: Joi.number(),
  title: Joi.string().required(),
  describe: Joi.string().required(),
  finalDate: Joi.string().required(),
  priority: Joi.string().valid("baixa", "media", "alta")
});

export {
  taskSchema
};

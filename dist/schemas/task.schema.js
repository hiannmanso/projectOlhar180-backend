import Joi from 'joi';
export const taskSchema = Joi.object({
    id: Joi.number(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    finalDate: Joi.string().required(),
    priority: Joi.string().valid('baixa', 'media', 'alta')
});

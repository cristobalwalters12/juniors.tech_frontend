import Joi from 'joi'

const postSchema = Joi.object({
  category: Joi.string()
    .messages({
      'string.empty': 'La categoría es obligatoria',
      'any.required': 'La categoría es obligatoria'
    })
    .required(),
  title: Joi.string().trim().min(4).max(300)
    .messages({
      'string.min': 'El título debe tener al menos 4 caracteres',
      'string.max': 'El título no puede tener más de 300 caracteres',
      'string.empty': 'El título no puede estar vacío',
      'any.required': 'El título es obligatorio'
    })
    .required(),
  body: Joi.string().min(4).messages({
    'string.min': 'La descripción debe tener al menos 4 caracteres',
    'string.empty': 'La descripción no puede estar vacía',
    'any.required': 'La descripción es obligatoria'
  }).required()
})

export { postSchema }

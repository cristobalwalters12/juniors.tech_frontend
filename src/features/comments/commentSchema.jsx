import Joi from 'joi'

const commentSchema = Joi.object({
  body: Joi.string().min(4).messages({
    'string.min': 'El comentario debe tener al menos 4 caracteres',
    'string.empty': 'El comentario no puede estar vacío',
    'any.required': 'El comentario no puede estar vacío'
  }).required()
})

export { commentSchema }

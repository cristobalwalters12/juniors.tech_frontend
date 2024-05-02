import Joi from 'joi'
import { plainTextContentValidator } from '../../shared/validators/plainTextContentValidator'

const postSchema = Joi.object({
  categoryId: Joi.string()
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
  content: plainTextContentValidator
})

export { postSchema }

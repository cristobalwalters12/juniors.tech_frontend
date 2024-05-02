import Joi from 'joi'

const painTextContentSchema = Joi.string().trim().min(4).messages({
  'string.min': 'El contenido debe tener al menos 4 caracteres',
  'string.empty': 'El contenido no puede estar vacío',
  'any.required': 'El contenido es obligatorio'
}).required()

const plainTextContentValidator = (content, helpers) => {
  const { error } = painTextContentSchema.validate(content.text)
  if (error) {
    return helpers.message({ custom: error.message })
  }
  return content
}

export { plainTextContentValidator }

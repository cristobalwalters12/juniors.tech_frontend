import Joi from 'joi'

const userSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'El correo electrónico debe ser válido',
    'any.required': 'El correo electrónico es obligatorio'

  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'La contraseña debe tener al menos 6 caracteres',
    'any.required': 'La contraseña es obligatoria'
  }),
  username: Joi.string().min(4).max(30).required().messages({
    'string.min': 'El nombre de usuario debe tener al menos 4 caracteres',
    'string.max': 'El nombre de usuario no puede tener más de 30 caracteres',
    'any.required': 'El nombre de usuario es obligatorio'
  }),
  day: Joi.string().required().messages({
    'number.min': 'El día debe ser válido',
    'number.max': 'El día debe ser válido',
    'any.required': 'El día es obligatorio'
  }),
  month: Joi.string().required().messages({
    'number.min': 'El mes debe ser válido',
    'number.max': 'El mes debe ser válido',
    'any.required': 'El mes es obligatorio'
  }),
  year: Joi.string().required().messages({
    'number.min': 'El año debe ser válido',
    'number.max': 'El año debe ser válido',
    'any.required': 'El año es obligatorio'

  }),
  terms: Joi.boolean().valid(true).required().messages({
    'any.only': 'Debes aceptar los términos y condiciones',
    'any.required': 'Debes aceptar los términos y condiciones'
  })
})

export { userSchema }

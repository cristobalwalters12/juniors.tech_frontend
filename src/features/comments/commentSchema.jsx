import Joi from 'joi'
import { plainTextContentValidator } from '../../shared/validators/plainTextContentValidator'

const commentSchema = Joi.object({
  content: plainTextContentValidator
})

export { commentSchema }

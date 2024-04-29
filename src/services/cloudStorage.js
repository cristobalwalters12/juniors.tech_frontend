import { uploadFile } from '../config/firebase'

const MAX_FILE_SIZE_MB = 5
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/svg+xml'
]

const isValidImageType = (file) => {
  return ACCEPTED_IMAGE_TYPES.includes(file.type)
}

const isValidFileSize = (file) => {
  return file.size <= MAX_FILE_SIZE_BYTES
}

const validateImage = (file) => {
  if (!file) throw new Error('Debes seleccionar una imagen para subir')
  if (!isValidImageType(file)) throw new Error('El tipo de imagen es inválido')
  if (!isValidFileSize(file)) throw new Error(`Las imágenes no seben superar los ${MAX_FILE_SIZE_MB}mb.`)
}

const uploadImage = async (file, folder) => {
  validateImage(file)
  return await uploadFile(file, folder)
}

const uploadAvatar = async (file) => await uploadImage(file, 'avatars')
const uploadPostImage = async (file) => await uploadFile(file, 'posts')

export { uploadAvatar, uploadPostImage, validateImage }

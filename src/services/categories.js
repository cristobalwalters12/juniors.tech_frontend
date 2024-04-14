import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants/apiUrls'

const getCategories = async () => {
  try {
    const { data } = await baseApi.get(API_PATHS.categories)
    return data
  } catch (error) {
    throw new Error('Error al obtener las categorías: ' + error.message)
  }
}

const addCategory = async (categoryName) => {
  try {
    const response = await baseApi.post(API_PATHS.categories, { name: categoryName })
    return response.data
  } catch (error) {
    throw new Error('Error al agregar una categoría: ' + error.message)
  }
}

const editCategory = async (categoryId, updatedName) => {
  try {
    const response = await baseApi.put(`${API_PATHS.categories}/${categoryId}`, { name: updatedName })
    return response.data
  } catch (error) {
    throw new Error('Error al editar la categoría: ' + error.message)
  }
}

const removeCategory = async (categoryId) => {
  try {
    const response = await baseApi.delete(`${API_PATHS.categories}/${categoryId}`)
    return response.data
  } catch (error) {
    throw new Error('Error al eliminar la categoría: ' + error.message)
  }
}

export { getCategories, addCategory, editCategory, removeCategory }

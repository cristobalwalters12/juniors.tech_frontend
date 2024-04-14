import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants/apiUrls'

const getMods = async () => {
  try {
    const { data } = await baseApi.get(`${API_PATHS.users}/mods`)
    return data
  } catch (error) {
    throw new Error('Error al obtener los moderadores: ' + error.message)
  }
}

const addModerator = async (username) => {
  try {
    const response = await baseApi.post(`${API_PATHS.mod}/users/${username}/mod`)
    return response.data
  } catch (error) {
    throw new Error('Error al agregar un moderador: ' + error.message)
  }
}

const removeModerator = async (username) => {
  try {
    const response = await baseApi.delete(`${API_PATHS.mod}/users/${username}/mod`)
    return response.data
  } catch (error) {
    throw new Error('Error al eliminar el moderador: ' + error.message)
  }
}

export { getMods, addModerator, removeModerator }

import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants'

const getPostReports = async () => {
  try {
    const { data } = await baseApi.get(`${API_PATHS.mod}/reports/posts`)
    console.log('Informes de publicaciones:', data)
    return data
  } catch (error) {
    throw new Error('Error al obtener los informes de publicaciones: ' + error.message)
  }
}

const getCommentReports = async () => {
  try {
    const { data } = await baseApi.get(`${API_PATHS.mod}/reports/comments`)
    console.log('Informes de comentarios:', data)
    return data
  } catch (error) {
    throw new Error('Error al obtener los informes de comentarios: ' + error.message)
  }
}

const getUserReports = async () => {
  try {
    const { data } = await baseApi.get(`${API_PATHS.mod}/reports/users`)
    console.log('Informes de usuarios:', data)
    return data
  } catch (error) {
    throw new Error('Error al obtener los informes de usuarios: ' + error.message)
  }
}

const ignoreReport = async (reportId) => {
  try {
    const response = await baseApi.delete(`${API_PATHS.mod}/reports/${reportId}`)
    return response.data
  } catch (error) {
    throw new Error('Error al ignorar el informe: ' + error.message)
  }
}

export { getPostReports, getCommentReports, getUserReports, ignoreReport }

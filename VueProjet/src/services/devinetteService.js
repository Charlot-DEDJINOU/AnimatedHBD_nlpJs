import api from './api'

export const predict = async (data) => {
  try {
    const response = await api.post('/preprocessing', data)
    const { success } = response.data
    return { message: success }
  } catch (error) {
    console.log(error.response.status)
  }
}

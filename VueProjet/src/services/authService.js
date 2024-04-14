import api from './api';

export const login = async (credentials) => {
    try {
        const response = await api.post('/login', credentials);
        const { message } = response.data;
        return { message, status : response.status } ;
    } catch (error) {
        return { status : error.response.status };
    }
};
import { API_URL } from '../constants/global/api';
import Cookies from 'js-cookie';
import axios from 'axios';

let token = Cookies.get('token');

export const getItemsService = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/items/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { status: 'success', dataArray: response.data.data };
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return {
        status: 'error',
        statusCode: error.code,
        message: error.message + ' Please check your internet connection',
      };
    } else {
      return {
        status: 'error',
        statusCode: error.response.statusCode,
        message: error.response.data.message,
      };
    }
  }
};

export const getItemByIdService = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/api/items/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { status: 'success', dataArray: response.data.data };
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return {
        status: 'error',
        statusCode: error.code,
        message: error.message + ' Please check your internet connection',
      };
    } else {
      return {
        status: 'error',
        statusCode: error.response.statusCode,
        message: error.response.data.message,
      };
    }
  }
};

export const updateItem = async (data) => {
  try {
    const response = await axios.patch(
      `${API_URL}/api/items/${data.id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: 'success', dataArray: response.data.data };
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return {
        status: 'error',
        statusCode: error.code,
        message: error.message + ' Please check your internet connection',
      };
    } else {
      return {
        status: 'error',
        statusCode: error.response.statusCode,
        message: error.response.data.message,
      };
    }
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/api/items/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { status: 'success', dataArray: response.data.data };
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return {
        status: 'error',
        statusCode: error.code,
        message: error.message + ' Please check your internet connection',
      };
    } else {
      return {
        status: 'error',
        statusCode: error.response.statusCode,
        message: error.response.data.message,
      };
    }
  }
};

export const createItem = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/items/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { status: 'success', dataArray: response.data.data };
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return {
        status: 'error',
        statusCode: error.code,
        message: error.message + ' Please check your internet connection',
      };
    } else {
      return {
        status: 'error',
        statusCode: error.response.statusCode,
        message: error.response.data.message,
      };
    }
  }
};

import { API_URL } from '../constants/global/api';
import Cookies from 'js-cookie';
import axios from 'axios';

let token = Cookies.get('token');
// get all houses
export const getAllHousesService = async () => {
  token = Cookies.get('token');
  try {
    const response = await axios.get(`${API_URL}/api/houses`);
    return { status: 'success', data: response.data.data };
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
//get all pending houses
export const getPendingHouses = async () => {
  token = Cookies.get('token');
  try {
    const response = await axios.get(`${API_URL}/api/houses?approved=false`);
    return { status: 'success', data: response.data.data };
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

export const getTopRatedRentHousesService = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/houses?limit=3&type=rent&rate[gte]=4`
    );
    return { status: 'success', data: response.data.data };
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
// top rated sell houses
export const getTopRatedSellHousesService = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/houses?limit=3&type=sale&rate[gte]=4`
    );
    return { status: 'success', data: response.data.data };
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
// get my houses
export const getMyHousesService = async () => {
  token = Cookies.get('token');
  try {
    const response = await axios.get(`${API_URL}/api/houses/myhouses/realtor`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { status: 'success', data: response.data.data };
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

// post my houses
export const postMyHousesService = async (data) => {
  token = Cookies.get('token');
  try {
    const response = await axios.post(
      `${API_URL}/api/houses/myhouses/realtor`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: 'success', data: response.data.data };
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

// patch my houses
export const patchMyHousesService = async (id, data) => {
  token = Cookies.get('token');
  try {
    const response = await axios.patch(
      `${API_URL}/api/houses/myhouses/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: 'success', data: response.data.data };
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

// delete my houses
export const deleteMyHousesService = async (id) => {
  token = Cookies.get('token');
  try {
    const response = await axios.delete(
      `${API_URL}/api/houses/myhouses/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: 'success', data: response.data.data };
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

// aprrove houses
export const approveHousesService = async (id) => {
  token = Cookies.get('token');
  try {
    const response = await axios.patch(
      `${API_URL}/api/houses/admin/approve/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: 'success', data: response.data.data };
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

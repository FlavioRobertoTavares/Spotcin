// apiService.ts

import axios from 'axios';

export function useApiService() {
  const baseUrl = 'http://localhost:5001/api'; 

  async function fetchData() {
    try {
      const response = await axios.get(`${baseUrl}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async function postUser(data) {
    const endpoint = `${baseUrl}/users`;
    try {
      const response = await axios.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }

  async function loginUser(data){
    const endpoint = `${baseUrl}/login`;
    try {
      const response = await axios.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }

  async function getUser(data){
    const endpoint = `${baseUrl}/users/${data}`;
    console.log(endpoint)
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error getting data:', error);
      throw error;
    }
  }

  return {
    fetchData,
    postUser,
    loginUser,
    getUser,
  };
}

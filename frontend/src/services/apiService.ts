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

  async function getPlaylists(data) {
    const endpoint = `${baseUrl}/playlists/${data.userId}`;
    try{
      const response = await axios.get(endpoint, data)
      return response.data
    }catch (error) {
      console.error("Error getting all playlists", error);
      throw error;
    }    
  }

  async function getPlaylistByID(data) {
    const endpoint = `${baseUrl}/playlists/${data.id}/${data.userId}`;
    try{
      const response = await axios.get(endpoint, data)
      return response.data
    }catch (error) {
      console.error("Error getting the playlist", error);
      throw error;
    }    
  }

  async function postPlaylist(data) {
    const endpoint = `${baseUrl}/playlists`;
    try {
      const response = await axios.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error posting playlist:', error);
      throw error;
    }
  }

  async function postSong(data) {
    const endpoint = `${baseUrl}/playlists/${data.id}/songs/${data.song}/${data.userId}`;
    try {
      const response = await axios.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error posting music:', error);
      throw error;
    }
  }

  async function deleteSong(data) {
    const endpoint = `${baseUrl}/playlists/${data.id}/songs/${data.song}/${data.userId}`;
    try {
      const response = await axios.delete(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error posting music:', error);
      throw error;
    }
  }

  async function updatePlaylist(data) {
    const endpoint = `${baseUrl}/playlists/${data.id}/${data.userId}`;
    try {
      const response = await axios.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error uptdating playlist:', error);
      throw error;
    }
  }

  async function removePlaylist(data) {
    const endpoint = `${baseUrl}/playlists/${data.id}/${data.userId}`;
    try {
      const response = await axios.delete(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error deleting playlist:', error);
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

  async function updateUser(user_id, body){
    const endpoint = `${baseUrl}/users/${user_id}`;
    console.log(endpoint)
    try {
      const response = await axios.put(endpoint, body);
      return response.data;
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }

  async function deleteUser(user_id){
    const endpoint = `${baseUrl}/users/${user_id}`;
    console.log(endpoint)
    try {
      const response = await axios.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  }

  return {
    fetchData,
    postUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser,
    getPlaylists,
    postPlaylist,
    getPlaylistByID,
    postSong,
    deleteSong,
    updatePlaylist,
    removePlaylist,
  };
}

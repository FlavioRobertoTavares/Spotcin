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

  async function getPlaylists() {
    const endpoint = `${baseUrl}/playlists`;
    try{
      const response = await axios.get(endpoint)
      return response.data
    }catch (error) {
      console.error("Error getting all playlists", error);
      throw error;
    }    
  }

  async function getPlaylistByID(data) {
    const endpoint = `${baseUrl}/playlists/${data}`;
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
    const endpoint = `${baseUrl}/playlists/${data.id}/songs/${data.song}`;
    try {
      const response = await axios.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error posting music:', error);
      throw error;
    }
  }


  return {
    fetchData,
    postUser,
    loginUser,
    getPlaylists,
    postPlaylist,
    getPlaylistByID,
    postSong,
  };
}

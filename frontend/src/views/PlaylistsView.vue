<script setup lang="ts">
  import { ref, onMounted} from 'vue';
  import { useApiService } from '../services/apiService';
  import { useRouter } from 'vue-router';
  import Playlist from '../components/Playlist.vue';

  const router = useRouter();
  const { getPlaylists, postPlaylist } = useApiService();

  const showPopup = ref(false);
  let playlistName = ref('');
  let playlistDescription = ref('');
  let playlists = ref([]);

  const savePlaylist = async () => {
    const response = await postPlaylist({ name: playlistName.value, description: playlistDescription.value });

    if (response.code === 200) {
      console.log('Playlist criada com sucesso');
      const playlistsResponse = await getPlaylists();
      playlists.value = playlistsResponse.data;
    } else {
      console.log('Erro ao Criar playlist');
      console.log(response);
    }
    router.push('/playlists');
    showPopup.value = false;
  };

  const goToPlaylist = (playlistId: string) => {
    router.push(`/playlist/${playlistId}`);
  };

  onMounted(async () => {
    const playlistsResponse = await getPlaylists();
    playlists.value = playlistsResponse.data;
  });
</script>

<template>
  <div>
    <div class="buttons_area">
      <h1>Minhas playlists</h1>
      <div class="buttons">
        <button class="btn" @click="showPopup = true">Criar playlist</button>
        <RouterLink to="/recommendations"><button class="btn">Categorias</button></RouterLink>
      </div>
    </div>

    <!-- Pop-up -->
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup">
        <h2>Criar Playlist</h2>
        <label for="playlist-name">Nome:</label>
        <input type="text" id="playlist-name" v-model="playlistName" />

        <label for="playlist-description">Descrição:</label>
        <textarea id="playlist-description" v-model="playlistDescription"></textarea>

        <button @click="savePlaylist">Salvar</button>
        <button @click="showPopup = false">Cancelar</button>
      </div>
    </div>

    <!-- Lista de Playlists -->
    <div class="playlists-area">
      <div v-for="(playlist, index) in playlists" :key="playlist.id" @click="goToPlaylist(playlist.id)">
        <Playlist :name="playlist.name" />
      </div>
    </div>
  </div>
</template>


<style scoped>
  /* Estilos... */

  .buttons_area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background-color: white;
  }

  h1 {
    margin: 0;
  }

  .buttons {
    display: flex;
    gap: 20px;
  }

  .btn {
    background-color: grey;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  .btn:hover {
    background-color: white;
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .popup {
    background-color: plum;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .popup h2 {
    margin-top: 0;
  }

  .popup label {
    display: block;
    margin-top: 10px;
  }

  .popup input, .popup textarea {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid white;
    border-radius: 4px;
  }

  .popup button {
    margin-top: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .popup button:first-of-type {
    background-color: green;
    color: white;
  }

  .popup button:first-of-type:hover {
    background-color: darkgreen;
  }

  .popup button:last-of-type {
    background-color: red;
    color: white;
    margin-left: 10px;
  }

  .popup button:last-of-type:hover {
    background-color: darkred;
  }

  .playlists-area {
    background-color: plum;
    padding: 8px;
    min-height: calc(85vh);
    color: white;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
</style>

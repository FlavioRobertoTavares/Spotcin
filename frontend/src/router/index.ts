import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import CadastroView from '../views/CadastroView.vue'
import MainPage from '../views/MainPage.vue'
import PlaylistsView from '@/views/PlaylistsView.vue'
import PlaylistPageView from '@/views/PlaylistPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },

    { path: '/login',
      name: 'login',
      component: LoginView
    },

    { path: '/cadastro',
      name: 'cadastro',
      component: CadastroView
    },
    {
      path: '/playlists',
      name: "playlists",
      component: PlaylistsView
    },

    {
      path: '/playlist/:id', 
      name: 'playlist_page',
      component: PlaylistPageView, 
      props: true
    }

  ]
})

export default router

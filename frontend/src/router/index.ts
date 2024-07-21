import { createRouter, createWebHistory } from 'vue-router'
import PlaylistsView from '@/views/PlaylistsView.vue'
import MainPageView from '@/views/MainPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPageView
    },

    {
      path: '/playlists',
      name: "playlists",
      component: PlaylistsView
    },

  ]
})

export default router

<template>
    <div class="playlist" :style="{ backgroundColor: randomColor }">
      <span>{{ name }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, defineProps } from 'vue';
  
  // Define props
  const props = defineProps<{ name: string }>();
  
  // Função para gerar uma cor aleatória
  const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  // Variável reativa para a cor aleatória
  const randomColor = ref<string>('');
  
  // Definir a cor aleatória quando o componente for montado
  onMounted(() => {
    randomColor.value = getRandomColor();
  });
  </script>
  
  <style scoped>
  .playlist {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    color: white; /* Cor do texto */
    font-size: 20px; /* Tamanho do texto */
    border-radius: 10px; /* Borda arredondada */
    padding: 5px;
    margin: 20px; /* Margem para espaçamento */
  }
  </style>
  
<template>
    <div class="login-container">
        <h1>Entrar no SPOTCIN</h1>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div class="forgot-password-link">
                <router-link to="/password">Esqueceu sua senha?</router-link>
            </div>
            <button type="submit">Entrar</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useApiService } from '../services/apiService';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const { loginUser } = useApiService();

let email = '';
let password = '';
const isLoggedIn = ref(false)

const login = async () => {
    try {
        const response = await loginUser({ email, password });
        if (response.code === 200) {
            console.log('Usuário logado com sucesso');
            console.log(response);
            let userID = response.data.id;
            setLogin(true, userID);
            router.push('/');
        } else {
            console.log('Erro ao logar usuário');
            console.log(response);
        }
    } catch (error) {
        console.error('Erro ao logar usuário:', error);
        showErrorOnForm(error.response.data.msg);
    }
};

function setLogin(isLogged: boolean, userId: string) {
  localStorage.setItem('isLoggedIn', JSON.stringify(isLogged))
  if (isLogged) {
    localStorage.setItem('userId', JSON.stringify(userId))
  }
}

function checkLoginState() {
  const loggedState = localStorage.getItem('isLoggedIn')
  isLoggedIn.value = loggedState ? JSON.parse(loggedState) : false
}

const showErrorOnForm = (error: string) => {
    const form = document.querySelector('.login-container form');
    const errorElement = document.createElement('p');
    errorElement.textContent = error;
    errorElement.style.color = 'red';
    form.appendChild(errorElement);
    setTimeout(() => {
        errorElement.remove();
    }, 3000);
};

onMounted(() => {
    checkLoginState()
    if (isLoggedIn.value) {
        router.push('/')
    }
})
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    background-color: lightgray;
    border: 0px;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    background-color: plum;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
}

.forgot-password-link {
    margin: 10px;
    text-align: right;
}
</style>
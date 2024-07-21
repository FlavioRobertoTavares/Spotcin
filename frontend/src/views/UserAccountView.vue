<template>
    <div>
        <p> Nome: {{ name }}  </p>
        <p> Email: {{ email }}</p>
        <button @click="openUpdatePopup">Atualizar informações</button>
        <button @click="openDeletePopup">Excluir conta</button>

        <div v-if="showUpdatePopup" class="popup">
            <form>
                <h2>Atualizar informações</h2>
                <div>
                    <label for="name">Nome</label>
                    <input type="text" id="name" v-model="name" required>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" required>
                </div>
                <div>
                    <label for="password">Senha</label>
                    <input type="password" id="password" v-model="password" required>
                </div>
                <div>
                    <label for="password-confirmation">Confirme a Senha</label>
                    <input type="password" id="password-confirmation" v-model="passwordConfirmation" required>
                </div>
                <div class="buttons-container">
                    <button id="confirm" type="submit">Atualizar</button>
                    <button id="cancel" @click="showUpdatePopup = false">Cancelar</button>
                </div>
            </form>
        </div>

        <div v-if="showDeletePopup" class="popup">
            <form>
                <h2>Excluir conta: {{ email }}</h2>
                
                <div>
                    <label for="password">Confirme sua senha: </label>
                    <input type="password" id="password" v-model="password" required>
                </div>
                
                <div class="buttons-container">
                    <button id="confirm" type="submit">Excluir</button>
                    <button id="cancel" @click="showDeletePopup = false">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import { useRouter } from 'vue-router';
import { useApiService } from '../services/apiService';

let name = ref('');
let email = ref('');
let password = ref('');
let showUpdatePopup = ref(false);
let showDeletePopup = ref(false);


// const router = useRouter();
const { getUser } = useApiService();

onMounted(async () => {
    const userID = localStorage.getItem('userId');
    const user = await getUser(JSON.parse(userID));
    console.log(user.data);
    name.value = user.data.name;
    email.value = user.data.email;
    password.value = user.data.password;

});

const openUpdatePopup = () => {
            showUpdatePopup.value = true;
        };

const openDeletePopup = () => {
            showDeletePopup.value = true;
        };

</script>

<style scoped>
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: plum;
    padding: 20px;
    border: 1px solid black;
    border-radius: 15px;
}

.buttons-container{
    display: flex;
    justify-content: space-between;

}
.buttons-container button{
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    color: white;
    border: none;
    cursor: pointer;
    width: 100px;
}

#confirm{
    background-color: green;
}

#cancel{
    background-color: red;
}

</style>
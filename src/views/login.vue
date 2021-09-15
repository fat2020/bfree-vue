<template>
    <div class="container mt-4 mb-4">
        <div class="row" v-show="!authenticated">
            <div class="col-md-6">
              <img src="../assets/logo.png" alt="">
            </div>
            <div class="col-md-6 pt-5">
                <h3 class="text-center text-color-blue"><b>Je me connecte</b></h3>
                <div class="d-flex align-items-center justify-content-center mt-3">
                    <a href="https://www.facebook.com" target="_blank" class="fa fa-facebook"></a>
                <a href="https://www.twitter.com" target="_blank" class="fa fa-twitter"></a> 
                </div>
                <hr class="mt-5 mb-3">
                <div class="text-center">
                    <span class="text-color-blue">Ou</span>
                </div>
                <form class="mt-5">
                    <div class="form-group">
                        <input type="email"
                               class="form-control"
                               placeholder="Email"
                               v-model="email">
                    </div>
                    <div class="form-group">
                        <input type="password"
                               class="form-control"
                               placeholder="Mot de passe"
                               v-model="password">
                    </div>
                    <div class="mt-2 text-right mb-5">
                        <router-link to="/login" class="mt-4 text-color-blue">Mot de passe oublié ?</router-link>
                    </div>
                    <button class="btn large-button text-center" @click="login">JE ME CONNECTE</button>
                </form>
                <div class="mt-2 mb-5">
                    <router-link to="/utilisateur" class="mt-4 text-color-blue">Créer un compte</router-link>
                </div>
            </div>
        </div>
        <div v-show="authenticated">
            <div class="alert alert-success">
                Vous etes authentifié vous pouvez utilisé le site web comme vous voulez !
            </div>
        </div>
    </div>
</template>
<script>
// axios permet de faire des requetes HTTP
    import axios from "axios"
    export default {
        name: "Login",
        data() {
            return{
                email: '',
                password :'',
                authenticated: false
            }
        },
        methods: {
            // Méthode pour se connecter
            login(e) {
                // Getting JWT Token
                // E.evenement pour que l on puisse rester sur la meme page 
                e.preventDefault()
                let url = "http://localhost:3000/clients/login";
                axios.post(url, {
                    email : this.email,
                    password: this.password
                })
                .then((res) => {
                    if(res.data.success) {
                        this.authenticated = true
                    }
                })
                // Login IN
                axios.post(url, {
                })
            }
        }
    }
</script>
<style scoped>
.text-color-blue {
    color:  #3b71A7 !important;
}
.large-button {
    width: 100%;
    background-color: #3b71A7;
    color: white;
    font-weight: bold;
}
</style>
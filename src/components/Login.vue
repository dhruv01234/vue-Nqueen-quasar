<template>
    <div class="login-container">
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <q-btn
          type="submit"
          color="amber"
          glossy
          text-color="black"
          push
          label="Login"
          :loading="isLoading"
        />
        <q-card class="margin padding">Sign up <q-btn color="amber" glossy text-color="black" flat><router-link class="link" to="/register">here</router-link></q-btn></q-card>
      </form>
    </div>
  </template>
  
  <script>
  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
  import { app } from '../firebase'
  
  export default {
    name: 'LoginComp',
    data() {
      return {
        email: '',
        password: '',
        isLoading: false
      }
    },
    beforeMount() {
      const auth = getAuth(app)
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.$router.push('/home')
        }
      })
    },
    methods: {
      async login() {
        const auth = getAuth(app)
        this.isLoading = true 
  
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password)
          onAuthStateChanged(auth, (user) => {
            if (user) {
              this.isLoading = false
              this.$router.push('/home')
            }
          })
        } catch (error) {
          console.log(error.message)
          this.isLoading = false 
        }
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  
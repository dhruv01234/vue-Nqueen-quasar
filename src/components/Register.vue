<template>
    <div class="login-container">
      <form @submit.prevent="register">
        <input type="text" v-model="username" placeholder="Username" required>
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <q-btn
          type="submit"
          color="amber"
          glossy
          text-color="black"
          push
          label="Register"
          :loading="isLoading"
        />
        <q-card class="margin padding">Sign in <q-btn color="amber" glossy text-color="black" flat><router-link class="link" to="/">here</router-link></q-btn></q-card>
      </form>
    </div>
  </template>
  
  <script>
  import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
  import { getDatabase, ref, set } from 'firebase/database'
  import { app } from '../firebase'
  
  export default {
    name: 'LoginComp',
    data() {
      return {
        username: "",
        email: "",
        password: "",
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
      async register() {
        const auth = getAuth(app)
        this.isLoading = true 
  
        try {
          const { user } = await createUserWithEmailAndPassword(auth, this.email, this.password)
          const db = getDatabase(app)
          const dataRef = ref(db, 'users/' + user.uid)
          const data = {
            username: this.username,
            email: this.email,
            uid: user.uid
          }
  
          try {
            await set(dataRef, data)
            console.log('data set')
            this.isLoading = false 
            this.$router.push('/home')
          } catch (err) {
            console.log(err.message)
            this.isLoading = false 
          }
        } catch (err) {
          console.log(err.message)
          this.isLoading = false 
        }
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  
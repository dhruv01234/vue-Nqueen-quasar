<template>
    <div v-if="!loading" class="container">
      <div class="level-buttons">
        <q-card v-for="level in levels" :key="level" class="my-card flex margin">
          <q-card-section class="bg-purple text-white level">
            <div class="text-h6 mid">{{level}} X {{level}} Chess Board</div>
          </q-card-section>
            <q-btn @click="selectLevel(level)" class="btnplay">Play</q-btn>
        </q-card>
      </div>
      <div class="logout-button">
        <q-btn class="margin" color="amber" glossy text-color="black" push label="Logout" @click="logout" />
        
      </div>
    </div>
    <div v-else>loadin...</div>
  </template>
  
  <script>
  import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
  import {app} from '../firebase'
  
  export default {
    name: 'HomeComp',
    data() {
      return {
        user: null,
        levels: [4, 5, 6, 7, 8],
        loading:true
      };
    },
    beforeMount() {
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        } else {
          this.$router.push('/login');
        }
      });
    },
    mounted(){
      this.loading = false;
    },
    methods: {
      async logout() {
        const auth = getAuth(app);
        await signOut(auth).then(() => {
          console.log('logout successfully');
          this.$router.push('/');
        });
      },
      selectLevel(level) {
        this.$router.push('/level/'+level)
      }
    }
  };
  </script>

  <style scoped>
  .level-buttons{
    width: 60%;
  }
  .level{
    width: 85%;
  }
 .btnplay{
    width: 15%;
 }
</style>
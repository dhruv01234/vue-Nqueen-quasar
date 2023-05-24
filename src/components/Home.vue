<template>
  <div class="container">
    <div class="level-buttons">
      <div class="card-container">
        <q-card v-for="level in levels" :key="level" class="my-card flexclass margin">
          <q-card-section class="bg-purple text-white level">
            <div class="text-h6 mid level-title">{{level}} X {{level}} Chess Board</div>
          </q-card-section>
          <q-btn @click="selectLevel(level)" class="btnplay">Play</q-btn>
        </q-card>
      </div>
    </div>
    <div class="logout-button">
      <q-btn class="margin" color="amber" glossy text-color="black" push label="Logout" @click="logout" />
    </div>
  </div>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase';

export default {
  name: 'HomeComp',
  data() {
    return {
      user: null,
      levels: [4, 5, 6, 7, 8],
    };
  },
  beforeMount() {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      } else {
        this.$router.push('/');
      }
    });
  },
  mounted() {
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
      this.$router.push('/level/' + level);
    },
  },
};
</script>

<style scoped>
.level-buttons {
  width: 50%;
  margin: 20px;
}

.level {
  width: 80%;
}

.btnplay {
  width: 20%;
}

.flexclass {
  display: flex;
}

.card-container {
  max-height: 100vh; 
  overflow: auto;
}

@media screen and (max-width: 510px) {
  .level-title {
    font-size: 15px;
  }
}

@media screen and (max-width: 413px) {
  .level-title {
    font-size: 14px;
  }
}

@media screen and (max-width: 390px) {
  .level-title {
    font-size: 14px;
  }
  .flexclass {
    display: block;
  }
  .btnplay {
    width: 100%;
  }
  .level {
    width: 100%;
  }
}


@media screen and (max-width: 323px) {
  .level-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

</style>

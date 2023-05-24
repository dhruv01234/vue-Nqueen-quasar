<template>
    <button class="back-button" @click="goBack">
      <i class="fas fa-arrow-left rounded-icon"></i>
    </button>
  </template>
  
  <script>
  import '@fortawesome/fontawesome-free/css/all.css'; 
  export default {
    name: 'BackButton',
    methods: {
      goBack() {
        this.$router.go(-1); 
      }
    }
  };
  </script>
  
  <style scoped>
  .back-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .back-button:hover {
    background-color: #0056b3;
  }
  
  .back-button:active {
    background-color: #003a80;
  }
  
  .rounded-icon {
    border-radius: 50%;
  }
  
  .back-button i {
    margin-right: 5px;
  }
  </style>
  
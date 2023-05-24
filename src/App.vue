<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
.link{
  text-decoration: none;
}
.mid{
  width: max-content;
  margin: auto;
}
.margin {
  margin: 10px;
}

.padding {
  padding: 8px;
}
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
}

form {
  display: flex;
  flex-direction: column;
}
.black-cell {
  background-color:  #066E7ABD;
}
.white-cell {
  background-color: #AAECF3A3;
}  
input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.level-buttons {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  justify-content: center;
  margin-bottom: 20px;
}

.level-button {
  margin: 5px;
  padding: 10px;
  background-color: #00FFC8CA;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  -webkit-appearance: none;
}

.level-button:hover {
  background-color: #00B34599;
}

.logout-button {
  width: max-content;
  margin: auto;
}
</style>

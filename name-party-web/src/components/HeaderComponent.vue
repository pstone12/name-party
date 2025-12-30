<script setup>
import Cookies from 'js-cookie';
import { ref } from 'vue';
import { UserIcon } from '@heroicons/vue/24/outline';

const playerName = ref(Cookies.get('playerName') || '');


function showNameDialog(){ //TODO: Replace prompt with a proper modal
  const newName = prompt("Enter your name:", playerName.value);
  if (newName) {
    playerName.value = newName;
    Cookies.set('playerName', newName);
  }
}

</script>

<template>
  <header>
    <ul id="navLinks">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/game">Create</router-link></li>
      <li><a href="https://github.com/pstone12/name-party" target="_blank">Github</a></li>
    </ul>

    <h1 id="title">Name Party</h1>

    <div id="playerInfo">
      <span>{{ playerName }}</span>
      <UserIcon @click="showNameDialog" class="icon-sm" />
    </div>


  </header>
</template>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 0.5rem;
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#navLinks {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
  left: 1rem;
  width: 10%;
}

#navLinks li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

#title {
  font-weight: bolder;
  margin: 0 auto;
}

#playerInfo {
  color: white;
  right: 1rem;
  font-weight: bold;
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

#playerInfo span {
  vertical-align: middle;
  margin-right: 0.5rem;
}
</style>

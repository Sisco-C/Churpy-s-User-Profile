<template>
  <div class="container">
    <div> 
      
    </div>

    <div class="navbar">
      <!-- Content for side navbar -->
      <ul class="menu" style="margin-top: 80px;">
        <li v-for="menuItem in menuItems" :key="menuItem.id" :class="{ active: menuItem.active }" @click="selectMenuItem(menuItem)">
          <button class="menu-button">
            <font-awesome-icon :icon="menuItem.icon" class="large-icon" />
          </button>
          <!-- <span class="name">{{ menuItem.name }}</span> -->
        </li>
      </ul>
    </div>


    <div class="div2">
      <img alt="user icon" src="../assets/atelier5.webp" class="rounded-full">
      <div style="color: #3ca877; font-weight: bold; font-size: 24px">Bon-V Limited</div>
      <br>

      <div style="font-size: 20px">Atelier Retailer</div>
      <br>
      <div style="font-size: 24px">Nairobi, Kenya</div>
      <br>
      <div style="display: flex; justify-content: center;">
        <text style="text-align: center;">75 <br>Partners</text>
        <text style="text-align: center;">12 <br>Branches</text>
        <text style="text-align: center;">37 <br>Clients</text>
      </div>

      <br>
      <div style="display: flex;">
        <button class="action-button">Edit Profile</button>
        <button class="action-button">Add Partners</button>
        
      </div>
    </div>

    <div class="div3">
      <div style="margin-bottom: 100px;"></div>
      <div style="display: flex;">
        <div class="tab active-tab">
          Merchandise
        </div>
        <div class="tab">
          Statistics & Dashboard
        </div>
              <ThemeSwitcher></ThemeSwitcher>

      </div>
      <br>

      <div class="grid">
        <img alt="user icon" src="../assets/atelier8.webp" class="profileimage">
        <img alt="user icon" src="../assets/atelier2.webp" class="profileimage">
        <img alt="user icon" src="../assets/atelier10.webp" class="profileimage">
        <img alt="user icon" src="../assets/atelier11.webp" class="profileimage">
      </div>
      <br>
      <div class="grid">
        <img alt="user icon" src="../assets/atelier7.webp" class="profileimage">
        <img alt="user icon" src="../assets/atelier6.webp" class="profileimage">
        <img alt="user icon" src="../assets/atelier10.webp" class="profileimage">
        <img alt="user icon" src="../assets/atelier11.webp" class="profileimage">
      </div>
      <br>
      <div class="grid">
        <img alt="user icon" src="../assets/atelier10.webp" class="profileimage">
        <img alt="user icon" src="../assets/atelier11.webp" class="profileimage">
        <img alt="user icon" src="../assets/atelier7.webp" class="profileimage">
        <img alt="user icon" src="../assets/atelier6.webp" class="profileimage">
      </div>
    </div>

  </div>
  
</template>

<script>
import     ThemeSwitcher from './ThemeSwitcher.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

export default {
  name: 'UserProfile',
  components: {
    FontAwesomeIcon,
    ThemeSwitcher
  },
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: 'Home',
          icon: ['fas', 'home'],
          active: true,
        },
        {
          id: 2,
          name: 'User',
          icon: ['fas', 'envelope'],
          active: true,
        },
        {
          id: 3,
          name: 'About',
          icon: ['fas', 'plus-circle'],
          active: false,
        },
        {
          id: 4,
          name: 'Contact',
          icon: ['fas', 'cog'],
          active: false,
        },
        {
          id: 5,
          name: 'Contact',
          icon: ['fas', 'user'],
          active: false,
        },
      ],
    };
  },
  methods: {
    selectMenuItem(item) {
      this.menuItems.forEach((menuItem) => {
        menuItem.active = menuItem.id === item.id;
      });
    },
  },
};
</script>

<style>
.container {
  display: flex;
  margin-top: 200px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #D3D3D3;
}

.menu {
  margin-right: 20px;
}

.logo {
  margin-left: 20px;
}

.bold-button {
  font-weight: bold;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  flex-wrap: wrap;
}

.rounded-full {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.profileimage {
  border-radius: 10%;
  width: 200px;
  height: 100px;
  object-fit: cover;
}

.div2 {
  flex: 0.5;
  margin: 10px 10px 0;
  padding: 20px;
  border-radius: 350px 350px 0 0;
  border: 2px solid #D3D3D3;
}

.div3 {
  flex: 2;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
}

.large-icon {
  font-size: 2.5rem;
}

.menu li {
  margin-bottom: 15px; /* Adjust the spacing as needed */
  list-style-type: none; /* Remove the dot */
}

.menu-button {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #2e7a5a;
}

.menu-button:focus {
  outline: none;
}

.action-button {
  background-color: #3ca877;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  margin: 0 10px;
  cursor: pointer;
}

.action-button:hover {
  background-color: #2e7a5a;
}

.tab {
  font-size: 24px;
  color: grey;
  border-bottom: 1px solid grey;
  cursor: pointer;
  padding-bottom: 5px;
  margin-right: 20px;
}

.tab.active-tab {
  color: #3ca877;
  border-bottom: 5px solid #3ca877;
}

@media screen and (max-width: 768px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 60px;
  }

  .div2 {
    margin: 10px 10px 0;
    padding: 20px;
    border-radius: 350px 350px 0 0;
    border: 2px solid #D3D3D3;
  }

  .div3 {
    margin: 10px;
    padding: 10px;
    flex-direction: column;
  }
}
</style>

<link rel="stylesheet" href="output.css">

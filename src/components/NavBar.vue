<template>
    <div id="app">
      <div class="sidebar">
        <ul>
          <li v-for="item in menuItems" :key="item.id" @click="selectItem(item)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="content">
        <h1>{{ selectedItem.name }}</h1>
        <p>{{ selectedItem.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          {
            id: 1,
            name: 'Home',
            description: 'Welcome to the homepage'
          },
          {
            id: 2,
            name: 'About',
            description: 'Learn more about us'
          },
          {
            id: 3,
            name: 'Contact',
            description: 'Get in touch with us'
          }
        ],
        selectedItem: null
      };
    },
    methods: {
      selectItem(item) {
        this.selectedItem = item;
      }
    }
  };
  </script>
  
  <style>
  .sidebar {
    width: 200px;
    background-color: #f2f2f2;
    padding: 20px;
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar li {
    cursor: pointer;
    margin-bottom: 10px;
  }
  
  .content {
    margin-left: 220px;
    padding: 20px;
  }
  </style>
  
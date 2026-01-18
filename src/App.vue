<template>
  <header class="header-container">
    <div class="logo-wrapper">
      <h1 class="logo">Mageiros</h1>
    </div>
    <nav class="nav-wrapper">
      <ul>
        <li>
          <RouterLink
            :to="{ name: 'home' }"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'favourites' }"
          >
            Favourites
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'add-recipe' }"
          >
            Add Recipe
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<script setup lang='ts'>

import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: #b1f1a3;
    padding: 0.75rem 2rem;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
  }

  .logo {
    color: #111;
  }
  .nav-wrapper ul {
    display: flex;
    gap: 1.5rem; 
  }

  .nav-wrapper ul li a {
    color: #111;
    font-weight: 400;
    letter-spacing: 0.5px;
    transition: opacity 0.2s ease;
  }

  .nav-wrapper ul li a:hover {
    opacity: 0.75;
  }

</style>


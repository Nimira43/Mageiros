<template>
  <header class="bg-amber-600 text-white shadow-md">
    <nav class="max-w-6xl mx-auto flex items-center justify-between py-6 px-4">
      <h1 class="logo text-3xl font-bold tracking-wide">
        Mageiros
      </h1>
      <ul class="flex items-center gap-8 text-lg uppercase font-medium">
        <li>
          <RouterLink
            :to="{ name: 'home' }"
            class="hover:text-black hover-transition"
          >
            Home
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'favourites' }"
            class="hover:text-black hover-transition"
          >
            Favourites
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'add-recipe' }"
            class="hover:text-black hover-transition"
          >
            Add Recipe
          </RouterLink>
        </li>
      </ul>

    </nav>
  </header>

  <main class="bg-amber-50 min-h-screen p-4">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="main-container">
    <div>
      <input 
        type="text"
        placeholder="Search recipes..."
        v-model="searchQuery"
      >
    </div>
    <nav v-if="filteredRecipes.length > 0">
      <ul>
        <li 
          v-for="recipe in filteredRecipes"
          :key="recipe.id"  
        >
          <RouterLink 
            :to="{
              name: 'recipe',
              params: {id: recipe.id}
            }"
          >
            {{ recipe.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div v-else>
      <p>No recipes found</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRecipeStore } from '../stores/recipe'
import { RouterLink } from 'vue-router'

const recipeStore = useRecipeStore()
const searchQuery = ref('')
const filteredRecipes = computed(
  () => recipeStore.filteredRecipes(searchQuery.value)
)
</script>


<template>
  <main class="main-container">
    <div>
      <h1 class="text-3xl mb-4">Search Recipes</h1>
      <input 
        type="text"
        placeholder="Search recipes..."
        v-model="searchQuery"
        class="border border-gray-300 hover:border-gray-600 focus:border-gray-600 p-2 mb-4 outline-none rounded-md hover-transition"
      >
    </div>
    <RecipeList :recipes="filteredRecipes"/>    
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRecipeStore } from '../stores/recipe'
import RecipeList from '../components/RecipeList.vue'

const recipeStore = useRecipeStore()
const searchQuery = ref('')
const filteredRecipes = computed(
  () => recipeStore.filteredRecipes(searchQuery.value)
)
</script>


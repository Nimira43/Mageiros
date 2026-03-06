<template>
  <div>
    <h1 class="text-3xl mb-4">Favourite Recipes</h1>
    <RecipeList :recipes="store.favouriteRecipes"/>
  </div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '../stores/recipe'
import RecipeList from '../components/RecipeList.vue'

const store = useRecipeStore()

</script>
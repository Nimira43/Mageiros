<template>
  <div>
    <h1 class="text-3xl mb-4">{{ recipe?.name }}</h1>
    <p  class="text-grey-700 text-xl mb-4">{{ recipe?.description }}</p>
    <div>
      <RouterLink 
        :to="{
          name: 'edit-recipe',
          params: {id: recipe?.id}
        }"
        class="bg-amber-600 text-white hover:bg-amber-700 rounded-md px-3 py-2 uppercase hover-transition"
      >
        Edit
      </RouterLink>
    </div>
    <button 
      v-if="recipe"
      @click="recipeStore.toggleFavourite(recipe.id)"
      class="mt-4 bg-amber-600 text-white hover:bg-amber-700 rounded-md px-3 py-2 uppercase hover-transition"
    >
      {{
        isFavourite
          ? 'Remove from Favourites'
          : 'Add to Favourites'
      }}
    </button>
  </div>
</template>

<script setup lang="ts">

import { useRecipeStore } from '../stores/recipe'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const recipeStore = useRecipeStore()

const recipe = computed(() =>
  recipeStore.getRecipeById(
    route.params.id as string
  )
)

const isFavourite = computed(() =>
  recipe.value
    ? recipeStore.isFavourite(recipe.value.id)
    : false

)
  
</script>
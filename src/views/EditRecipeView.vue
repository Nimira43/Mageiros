<template>
  <h1 class="text-3xl mb-4">Edit Recipe</h1>
  <form @submit.prevent="updateRecipe">
    <div>
      <input 
        class="border border-gray-300 hover:border-gray-600 focus:border-gray-600 p-2 mb-4 outline-none rounded-md hover-transition"
        placeholder="Recipe name..."
        type="text"
        v-model="name"
        required  
      >
    </div>
    <div>
      <textarea 
        class="border border-gray-300 hover:border-gray-600 focus:border-gray-600 p-2 mb-4 outline-none rounded-md hover-transition"
        placeholder="Recipe description..."
        v-model="description" 
        required
      ></textarea>
    </div>
    <button 
      type="submit"
      class="bg-amber-600 text-white hover:bg-amber-700 rounded-md px-3 py-2 uppercase hover-transition"
    >
      Edit
    </button>
  </form>
</template>

<script setup lang="ts">
import { useRecipeStore } from '../stores/recipe'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = useRecipeStore()
const router = useRouter()
const route = useRoute()
const name = ref('')
const description = ref('')

const fetchRecipe = () => {
  const id = route.params.id as string
  const recipe = store.getRecipeById(id)

  if (recipe) {
    name.value = recipe.name
    description.value = recipe.description
  } else {
    router.push({ name: 'not-found'})
  }
} 

onMounted(fetchRecipe)

const updateRecipe = () => {
  store.editRecipe({
    id: route.params.id as string,
    name: name.value,
    description: description.value
  })
  router.push({
    name: 'recipe',
    params: {
      id: route.params.id as string
    }
  })
}
</script>
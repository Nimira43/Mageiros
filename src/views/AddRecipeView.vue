<template>
  <h1 class="text-3xl mb-4">Add Recipe</h1>
  <form @submit.prevent="addRecipe">
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
      Add
    </button>
  </form>
</template>

<script setup lang="ts">
import { useRecipeStore } from '../stores/recipe'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useRecipeStore()
const name = ref('')
const description = ref('')
const router = useRouter()

const addRecipe = () => {
  const recipe = store.addRecipe({
    name: name.value,
    description: description.value
  })
  router.push({
    name: 'recipe',
    params: {
      id: recipe.id
    }
  })
}
</script>
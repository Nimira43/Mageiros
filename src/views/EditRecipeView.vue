<template>
  <h1>Edit Recipe</h1>
  <form @submit.prevent="updateRecipe">
    <div>
      <input 
        placeholder="Recipe name..."
        type="text"
        v-model="name"
        required  
      >
    </div>
    <div>
      <textarea 
        placeholder="Recipe description..."
        v-model="description" 
        required
      ></textarea>
    </div>
    <button type="submit">Add</button>
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
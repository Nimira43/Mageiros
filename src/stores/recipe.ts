import { defineStore } from 'pinia'
import { computed } from 'vue'
import { ref } from 'vue'

interface Recipe {
  id: string
  name: string
  description: string
}

type NewRecipe = Omit<Recipe, 'id'>

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([])
  
  const addRecipe = (recipe: NewRecipe) => {
    const newRecipe = {
      id: Date.now().toString(),
      ...recipe
    }
    recipes.value.push(newRecipe)

    return newRecipe
  }

  const getRecipeById = (id: string) =>
    recipes.value.find(
      recipe => recipe.id === id
    )

  const searchQuery = ref('')

  const filteredRecipes = computed(() =>
    recipes.value.filter(
      recipe => recipe.name.toLocaleLowerCase().includes(
        searchQuery.value.toLocaleLowerCase()
      )
    )
  )
  
  return {
    recipes,
    addRecipe,
    getRecipeById,
    searchQuery,
    filteredRecipes
  }
})
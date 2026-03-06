import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface Recipe {
  id: string
  name: string
  description: string
}

type NewRecipe = Omit<Recipe, 'id'>

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([])
  const favouritesIds = ref<string[]>([])
  
  const toggleFavourite = (id: string) => {
    if (favouritesIds.value.includes(id)) {
      favouritesIds.value = favouritesIds.value.filter(
        favId => favId !== id
      )
    } else {
      favouritesIds.value.push(id)
    }
  }

  const isFavourite = (id: string) => favouritesIds.value.includes(id)
  
  const addRecipe = (recipe: NewRecipe) => {
    const newRecipe = {
      id: Date.now().toString(),
      ...recipe
    }
    recipes.value.push(newRecipe)

    return newRecipe
  }

  const editRecipe = (updatedRecipe: Recipe) => {
    const index = recipes.value.findIndex(
      recipe => recipe.id === updatedRecipe.id
    )

    if (index !== -1) {
      recipes.value[index] = updatedRecipe
    }
  }

  const getRecipeById = (id: string) =>
    recipes.value.find(
      recipe => recipe.id === id
    )

  const filteredRecipes = (searchQuery: string) =>
    recipes.value
      .filter(
        recipe => recipe.name
          .toLocaleLowerCase()
          .includes(
            searchQuery
              .toLocaleLowerCase()
          )
    )
  
  const favouriteRecipes = computed(() =>
    recipes.value.filter(
      recipe => favouritesIds.value.includes(
        recipe.id
      )
    )
  )
  
  return {
    recipes,
    addRecipe,
    getRecipeById,
    filteredRecipes,
    editRecipe,
    favouritesIds,
    toggleFavourite,
    isFavourite,
    favouriteRecipes
  }
})
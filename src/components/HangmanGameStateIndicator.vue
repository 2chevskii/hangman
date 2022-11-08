<script setup lang="ts">
import type {HGameState} from '@/scripts/gameState'
import {computed} from'vue'

const props = defineProps<{gameState: HGameState}>();

const stateText = computed(() => {
  switch (props.gameState) {
    case 'in-progress':
      return 'Guess the word'
    case 'won':
      return 'Magnificent!'
    default:
      return "You've lost"
  }
})
</script>


<template>
  <h2 class="game-state">
    {{stateText}}
  </h2>
</template>


<style scoped>

</style>
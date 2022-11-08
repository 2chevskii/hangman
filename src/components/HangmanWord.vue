<template>
  <div class="container">
    <div class="letter-container" v-for="(letter,i) in letters" :key="i" :class="letter.state" >
      {{ letter.letter }}
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  letters: {
    state: 'unset' | 'correct' | 'incorrect',
    letter: string
  }[]
}>();

</script>

<style scoped lang="scss">

$color-valid: dodgerblue;
$color-invalid: red;

.container {
  display: flex;
  gap: .25em;
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;
}


.letter-container {
  border-bottom: 10px solid black;

  &.correct {
    color: $color-valid;
    //border-bottom-color: $color-valid;
  }

  &.incorrect {
    color: $color-invalid;
    //border-bottom-color: $color-invalid;
  }

  &.unset {
    color: transparent;
  }
}
</style>
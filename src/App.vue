<script setup lang="ts">
import HangmanDrawing from '@/components/HangmanDrawing.vue';
import HangmanWord from '@/components/HangmanWord.vue';
import HangmanKeyboard from '@/components/HangmanKeyboard.vue';
import type {HGameState} from '@/scripts/gameState';
import HangmanGameStateIndicator from '@/components/HangmanGameStateIndicator.vue';

import {computed, ref, reactive} from 'vue';

const hState = ref(0);
const hPressed = reactive(new Array<string>());
const validKeys = reactive(new Array<string>());
const invalidKeys = reactive(new Array<string>());
const hGameState = ref<HGameState>('in-progress');

const wordInit = 'dogs';

const hLetters = computed(() => {
  const letters = [];

  for (const char of wordInit) {
    if (hPressed.includes(char)) {
      letters.push({letter: char, state: 'correct'});
    } else if (hState.value === 6) {
      letters.push({letter: char, state: 'incorrect'});
    } else {
      letters.push({letter: char, state: 'unset'});
    }
  }

  return letters;
});

const handlePress = (key: string) => {
  console.log('Handling press of %s', key);
  if (!wordInit.includes(key)) {
    hState.value++;
    invalidKeys.push(key);

    /*
     * if hState.value === 6 => end game
     */

    if (hState.value === 6) {
      hGameState.value = 'lost'
    }
  } else {
    validKeys.push(key);
  }

  hPressed.push(key);

  /*
   * if hLetters.all x => x.state === correct => win game
   */

  if (hLetters.value.every(x => x.state === 'correct')) {
    hGameState.value = 'won'
  }
};
</script>

<template>
  <div class="hangman-container">
    <HangmanGameStateIndicator :game-state="hGameState" />
    <HangmanDrawing :hangman-state="hState" />
    <HangmanWord :letters="hLetters" />
    <HangmanKeyboard
      @key-press="handlePress"
      :valid-keys="validKeys"
      :invalid-keys="invalidKeys"
      :game-state="hGameState"
    />
  </div>
</template>

<style scoped>
.hangman-container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  max-width: 600px;
}
</style>

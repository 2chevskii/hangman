<template>
  <div class="container">
    <div class="key" :class="getKeyClass(i)" v-for="(key, i) in keys" :key="i"
         @click="onKeyClick(i)">
      {{ key }}
    </div>
  </div>
</template>

<script lang="ts">
import {type HGameState} from '@/scripts/gameState';

export default {
  name: 'HangmanKeyboard',
  data() {
    const keys = [];

    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
      const k = String.fromCharCode(i);

      keys.push(k);
    }

    return {keys};
  },
  methods: {
    onKeyClick(id) {
      const key = this.keys[id];

      console.log('Key pressed: %s', key);

      if (this.validKeys.includes(key) || this.invalidKeys.includes(key)) {
        /*
        * prevent pressing of keys which were guessed already
        */
        return;
      }

      this.$emit('key-press', key);
    },
    getKeyClass(i) {
      const k = this.keys[i];

      if (this.invalidKeys.includes(k) || (this.gameState !== 'in-progress' && !this.validKeys.includes(k))) {
        return 'invalid';
      } else if (this.validKeys.includes(k)) {
        return 'valid';
      } else {
        return '';
      }
    }
  },
  props: {
    invalidKeys: Array,
    validKeys: Array,
    gameState: String
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3px;
  //max-width: 45rem;
}

.key {
  border: 2px solid black;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: monospace;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  user-select: none;
  transition: background-color 0.1s ease, color 0.1s ease;

  &:not(.valid, .invalid) {
    cursor: pointer;
  }

  &:hover:not(.valid, .invalid) {
    background-color: gray;
    color: lightgray;
  }

  &:active:not(.valid, .invalid) {
    background-color: darken(gray, 5%);
    color: darken(lightgray, 10%);
  }

  &.valid {
    background-color: dodgerblue;
    color: white;
  }

  &.invalid {
    color: lightgray;
    border-color: darkgray;
  }
}
</style>

<template>
  <div class="container">
    <div class="h-head" v-show="showHead" />
    <div class="h-body" v-show="showBody" />
    <div class="h-arm-left" v-show="showLeftArm" />
    <div class="h-arm-right" v-show="showRightArm" />
    <div class="h-leg-left" v-show="showLeftLeg" />
    <div class="h-leg-right" v-show="showRightLeg" />
    <div
      class="line line-vertical absolute"
      style="right: 0; top: 0; height: 50px"
    />
    <div
      class="line line-horizontal"
      style="margin-left: 120px; width: 200px"
    />
    <div class="line line-vertical" style="height: 400px; margin-left: 120px" />
    <div class="line line-horizontal" style="width: 250px" />
  </div>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  hangmanState: Number,
});

const showHead = computed(() => props.hangmanState > 0);
const showBody = computed(() => props.hangmanState > 1);
const showLeftArm = computed(() => props.hangmanState > 2);
const showRightArm = computed(() => props.hangmanState > 3);
const showLeftLeg = computed(() => props.hangmanState > 4);
const showRightLeg = computed(() => props.hangmanState > 5);
</script>

<style scoped lang="scss">
$line-width: 10px;
$line-color: black;

.line {
  background-color: $line-color;

  &.line-vertical {
    width: $line-width;
  }

  &.line-horizontal {
    height: $line-width;
  }
}

.container {
  position: relative;
}

.absolute {
  position: absolute;
}

.h-head {
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 100%;
  border: $line-width solid $line-color;
  right: -30px;
  top: 50px;
}

.h-body {
  position: absolute;
  width: $line-width;
  height: 150px;
  background-color: $line-color;
  right: 0;
  top: 120px;
}

.h-arm-left {
  position: absolute;
  width: $line-width;
  height: 100px;
  top: 150px;
  right: 35px;
  background-color: $line-color;
  transform: rotateZ(45deg);
}

.h-arm-right {
  position: absolute;
  width: $line-width;
  height: 100px;
  top: 150px;
  right: -35px;
  background-color: $line-color;
  transform: rotateZ(-45deg);
}

.h-leg-left {
  position: absolute;
  width: $line-width;
  height: 100px;
  top: 250px;
  right: 35px;
  background-color: $line-color;
  transform: rotateZ(45deg);
}

.h-leg-right {
  position: absolute;
  width: $line-width;
  height: 100px;
  top: 250px;
  right: -35px;
  background-color: $line-color;
  transform: rotateZ(-45deg);
}
</style>

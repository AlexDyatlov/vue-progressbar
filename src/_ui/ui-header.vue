<template>
  <header class="header">
    <ui-container>
      <h1 class="header__title">{{ title }}</h1>
    </ui-container>
  </header>
</template>

<script setup lang="ts">
import UiContainer from './ui-container.vue';

interface HeaderProps {
  title: string;
}

defineProps<HeaderProps>();
</script>

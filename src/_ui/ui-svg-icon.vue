<template>
  <svg :class="['icon', className]" :width="size" :height="size">
    <use :href="`${spriteSvg}#${name}`" />
  </svg>
</template>

<script setup lang="ts">
import spriteSvg from '@/assets/sprite.svg';

interface SvgIconProps {
  name: string;
  size: string;
  className?: string;
}

defineProps<SvgIconProps>();
</script>

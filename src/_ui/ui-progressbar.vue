<template>
  <div
    class="progressbar"
    :class="[progressbarClasses, { 'progressbar--dashboard': type === 'dashboard' }]"
    :style="{ '--progressbar-value': progress }"
  >
    <svg
      class="progressbar__svg"
      :width="size"
      :height="size"
      viewBox="0 0 160 160"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="progress"
    >
      <circle class="progressbar__track" r="70" cx="80" cy="80" />
      <circle class="progressbar__indicator" r="70" cx="80" cy="80" />
    </svg>

    <p v-if="!status && progress !== 100" class="progressbar__value">{{ progress }}%</p>
    <ui-svg-icon v-if="iconName" class="progressbar__icon" :name="iconName" size="24" aria-hidden="true" />
  </div>
</template>

<script setup lang="ts">
import UiSvgIcon from '@/_ui/ui-svg-icon.vue';
import { useProgressbar } from '@/composables/useProgressbar';
import type { ProgressStatus } from '@/types';

interface ProgressbarProps {
  status?: ProgressStatus;
  type?: 'dashboard';
  size?: string;
  progress?: number;
}

const props = withDefaults(defineProps<ProgressbarProps>(), {
  status: undefined,
  type: undefined,
  size: '160',
  progress: 0
});

const { progressbarClasses, iconName } = useProgressbar(props.status, props.progress);
</script>

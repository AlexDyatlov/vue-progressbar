<template>
  <div class="ui-kit">
    <ui-container>
      <div class="ui-kit__box ui-kit__box--border">
        <div class="ui-kit__item">
          <div class="ui-kit__text">По умолчанию — <code>_empty</code></div>
          <ui-progressbar :progress="0" />
        </div>

        <div class="ui-kit__item">
          <div class="ui-kit__text">
            <code>progress="{{ progress }}"</code>
          </div>
          <ui-progressbar :progress="progress" />
          <input v-model="progress" class="ui-kit__range" type="range" min="0" max="100" />
        </div>

        <div class="ui-kit__item">
          <div class="ui-kit__text">
            <code>progress="100"</code>
            <br />
            <br />
            <code>status="success"</code>
          </div>
          <ui-progressbar :progress="100" />
        </div>

        <div class="ui-kit__item">
          <div class="ui-kit__text"><code>status="warning"</code></div>
          <ui-progressbar :progress="40" :status="ProgressStatus.Warning" />
        </div>

        <div class="ui-kit__item">
          <div class="ui-kit__text"><code>status="error"</code></div>
          <ui-progressbar :progress="80" :status="ProgressStatus.Error" />
        </div>
      </div>

      <div class="ui-kit__box">
        <div class="ui-kit__item">
          <div class="ui-kit__text">Тип — <code>dashboard</code></div>
          <ui-progressbar :progress="progressDashboard" type="dashboard" />
          <input v-model="progressDashboard" class="ui-kit__range" type="range" min="0" max="100" />
        </div>
      </div>
    </ui-container>
  </div>
</template>

<script setup lang="ts">
import uiContainer from './ui-container.vue';
import uiProgressbar from './ui-progressbar.vue';
import { ProgressStatus } from '@/types';

import { ref } from 'vue';

const progress = ref(40);
const progressDashboard = ref(60);
</script>

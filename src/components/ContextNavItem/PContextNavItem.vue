<template>
  <router-link
    active-class="p-context-nav-item--active"
    class="p-context-nav-item"
    :to="to"
  >
    <template v-if="icon">
      <PIcon :icon="icon" class="p-context-nav-item__icon" />
    </template>
    <span>{{ title }}</span>
  </router-link>
</template>

<script setup lang="ts">
  import { RouteLocationRaw } from 'vue-router'
  import PIcon from '@/components/Icon/PIcon.vue'
  import { Icon } from '@/types/icon'

  defineProps<{
    to: string | RouteLocationRaw,
    title?: string,
    icon?: Icon,
  }>()
</script>

<style>
.p-context-nav-item { @apply
  flex
  py-2.5
  px-3
  rounded-md
  items-center
  transition
  duration-200
  ease-linear
  gap-3
  text-sm
  leading-5
  select-none
  font-medium
  hover:text-primary
  active:text-primary-600
}

.p-context-nav-item__icon { @apply
  h-6
  w-6
}

.p-context-nav-item--active { @apply
  text-prefect-400
}
</style>
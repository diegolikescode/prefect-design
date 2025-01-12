<template>
  <PBaseInput class="p-date-button">
    <template v-for="(index, name) in $slots" #[name]="data">
      <slot :name="name" v-bind="data" />
    </template>
    <template #control="{ attrs }">
      <button
        ref="buttonElement"
        type="button"
        class="p-date-button__control"
        aria-hidden="true"
        v-bind="attrs"
      >
        <span class="p-date-button__value">
          <slot>
            {{ displayValue }}
          </slot>
        </span>
      </button>
    </template>
    <template #append>
      <span class="p-date-button__icon">
        <PIcon icon="CalendarIcon" />
      </span>
    </template>
  </PBaseInput>
</template>

<script lang="ts" setup>
  import { format } from 'date-fns'
  import { computed, ref } from 'vue'
  import PBaseInput from '@/components/BaseInput/PBaseInput.vue'

  const props = defineProps<{
    date: Date | null | undefined,
    showTime?: boolean,
  }>()

  const buttonElement = ref<HTMLButtonElement>()
  const el = computed(() => buttonElement.value)

  const dateTimeFormat = computed(() => {
    if (props.showTime) {
      return 'MMM do, yyyy \'at\' h:mm a'
    }

    return 'MMM do, yyyy'
  })

  const displayValue = computed(() => {
    if (props.date) {
      return format(props.date, dateTimeFormat.value)
    }

    return props.showTime ? 'Select date and time' : 'Select date'
  })

  defineExpose({ el })
</script>

<style>
.p-date-button__control { @apply
  w-full
  h-full
  py-2
  px-3
  text-left
  text-base
  cursor-default
  outline-none
  border-none
  ring-0
  focus:ring-0
  truncate
}

.p-date-button__control:disabled { @apply
  cursor-not-allowed
}

.p-date-button__value { @apply
  min-h-[1.5rem]
  flex
  justify-start
  items-stretch
  w-full
  h-full
}

.p-date-button__icon { @apply
  pr-2
  flex
  items-center
  pointer-events-none
}

.p-date-button__icon .p-icon { @apply
  w-4
  h-4
}
</style>
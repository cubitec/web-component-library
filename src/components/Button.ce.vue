<template>
  <button
    :class="['cubitec-button', `cubitec-button--${variant}`, { 'cubitec-button--disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

export interface ButtonProps {
  label?: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  label: '',
  variant: 'primary',
  disabled: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.cubitec-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: inherit;
  line-height: 1.5;
}

.cubitec-button--primary {
  background-color: #3490dc;
  color: white;
}

.cubitec-button--primary:hover:not(.cubitec-button--disabled) {
  background-color: #2779bd;
}

.cubitec-button--secondary {
  background-color: #6c757d;
  color: white;
}

.cubitec-button--secondary:hover:not(.cubitec-button--disabled) {
  background-color: #5a6268;
}

.cubitec-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cubitec-button:focus {
  outline: 2px solid #3490dc;
  outline-offset: 2px;
}
</style>

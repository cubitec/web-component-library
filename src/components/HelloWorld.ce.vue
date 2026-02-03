<template>
  <div :class="['cubitec-hello-world', `cubitec-hello-world--${size}`]">
    <h1 class="cubitec-hello-world__title">{{ greeting }}</h1>
    <p class="cubitec-hello-world__message">
      <slot>{{ message }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
export interface HelloWorldProps {
  greeting?: string
  message?: string
  size?: 'small' | 'medium' | 'large'
}

withDefaults(defineProps<HelloWorldProps>(), {
  greeting: 'Hello World',
  message: 'Welcome to the Cubitec component library!',
  size: 'medium'
})
</script>

<style scoped>
.cubitec-hello-world {
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  font-family: inherit;
}

.cubitec-hello-world__title {
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

.cubitec-hello-world__message {
  margin: 0;
  opacity: 0.9;
}

.cubitec-hello-world--small .cubitec-hello-world__title {
  font-size: 1.25rem;
}

.cubitec-hello-world--small .cubitec-hello-world__message {
  font-size: 0.875rem;
}

.cubitec-hello-world--medium .cubitec-hello-world__title {
  font-size: 1.75rem;
}

.cubitec-hello-world--medium .cubitec-hello-world__message {
  font-size: 1rem;
}

.cubitec-hello-world--large .cubitec-hello-world__title {
  font-size: 2.5rem;
}

.cubitec-hello-world--large .cubitec-hello-world__message {
  font-size: 1.25rem;
}
</style>

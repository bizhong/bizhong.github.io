<template>
  <section class="component-hero">
    <header v-if="title || subtitle" class="component-hero__header">
      <h3 v-if="title" class="lbz-typography--h4">{{ title }}</h3>
      <p v-if="subtitle" class="lbz-typography--subtitle1">{{ subtitle }}</p>
    </header>
    <div class="component-hero__content"><slot /></div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentHero',

  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="less">
.component-hero {
  &__header {
    padding-bottom: 32px;

    h3 {
      margin: 0;
    }

    p {
      margin: 8px 0 0;
    }
  }

  &__content p {
    margin: 0 0 24px;
  }

  + .lbz-divider {
    margin: 48px 0;
  }
}
</style>

<template>
  <lbz-empty-state class="page--error" title="Oops!" :subtitle="getSubtitle">
    <template #end>
      <lbz-button
        router-link
        :router-link-props="{
          to: '/',
          replace: true,
          exact: true
        }"
        tag="a"
        >Back Home</lbz-button
      >
    </template>
  </lbz-empty-state>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Error',

  props: {
    error: {
      type: Object,
      default: null
    }
  },

  computed: {
    statusCode(): number {
      return (this.error && this.error.statusCode) || 500
    },

    getSubtitle(): string {
      return this.statusCode === 404
        ? "We couldn't find the page you're looking for."
        : 'Something went wrong.'
    }
  }
})
</script>

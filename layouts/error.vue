<template>
  <lbz-empty-state
    class="page-error"
    title="¯\_(ツ)_/¯"
    :subtitle="getSubtitle"
  >
    <template #end>
      <lbz-button
        router-link
        :router-link-props="{
          to: '/',
          replace: true,
          exact: true
        }"
        tag="a"
        type="outlined"
        >Back Home</lbz-button
      >
    </template>
  </lbz-empty-state>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageError',

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
        ? 'Oops, page was not found.'
        : 'Oops, something went wrong.'
    }
  }
})
</script>

<style lang="less">
.page-error.lbz-empty-state .lbz-empty-state__title {
  margin-bottom: 24px;
  .lbz-typography('h4');
}
</style>

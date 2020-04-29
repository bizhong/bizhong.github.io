<template>
  <a
    class="component-link"
    :href="href"
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    <slot /><lbz-icon v-if="icon" disabled><IconOpenInNew /></lbz-icon>
  </a>
</template>

<script lang="ts">
  import Vue from 'vue'

  import IconOpenInNew from '~/assets/img/icon/open_in_new.svg?inline'

  export default Vue.extend({
    name: 'ComponentLink',

    components: {
      IconOpenInNew
    },

    props: {
      href: {
        type: String,
        required: true
      },
      icon: {
        type: Boolean,
        default: true
      }
    }
  })
</script>

<style lang="less">
  .component-link {
    .lbz-icon {
      width: 16px;
      height: 16px;
      font-size: 16px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
</style>

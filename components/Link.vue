<template>
  <a
    :class="[
      'component-link',
      onBackground && `component-link--on-${onBackground}`
    ]"
    :href="href"
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    <slot /><lbz-icon v-if="icon" :color="color" disabled
      ><IconOpenInNew
    /></lbz-icon>
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
      onBackground: {
        type: String,
        default: '' // 'surface' (default), 'light', 'dark'
      },
      href: {
        type: String,
        required: true
      },
      icon: {
        type: Boolean,
        default: true
      }
    },

    computed: {
      color(): string {
        return this.onBackground === 'light'
          ? 'dark'
          : this.onBackground === 'dark'
          ? 'light'
          : ''
      }
    }
  })
</script>

<style lang="less">
  .component-link {
    // on-background
    &--on {
      &-light {
        color: #lbz-theme.light[primary];
      }

      &-dark {
        color: #lbz-theme.dark[primary];
      }
    }

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

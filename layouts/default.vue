<template>
  <client-only>
    <lbz-backdrop
      class="backdrop"
      :active.sync="visActive"
      background="dark"
      scrim
    >
      <template #back-start>
        <lbz-top-app-bar background="dark" :title="cgetTitle" role="banner">
          <template #start>
            <lbz-icon-button
              on-background="dark"
              darkened
              :title="cisHomePage ? 'Refresh' : 'Back'"
              @click.stop="fgoBack"
            >
              <IconLogo v-if="cisHomePage" />
              <IconArrowBack v-else />
            </lbz-icon-button>
          </template>
          <template #center>
            <lbz-tab
              router-link
              item-tag="a"
              align="center"
              on-background="dark"
              on-content
              role="navigation"
            >
              <lbz-tab-item to="/">Home</lbz-tab-item>
              <lbz-tab-item to="/articles">Articles</lbz-tab-item>
            </lbz-tab>
          </template>
          <template #end>
            <lbz-icon-button
              :active.sync="visActive"
              on-background="dark"
              darkened
              title="Toggle menu"
            >
              <template #on-icon>
                <IconClose />
              </template>
              <template #off-icon>
                <IconMenu />
              </template>
            </lbz-icon-button>
            <lbz-icon-button
              on-background="dark"
              darkened
              title="Refresh"
              @click.stop="frefresh"
              ><IconRefresh
            /></lbz-icon-button>
          </template>
        </lbz-top-app-bar>
      </template>
      <template #back-center>
        <!-- Navigation -->
        <lbz-list
          tag="nav"
          router-link
          item-tag="a"
          on-background="dark"
          darkened
          nav
          role="navigation"
        >
          <lbz-list-item to="/">Home</lbz-list-item>
          <lbz-list-item to="/articles">Articles</lbz-list-item>
        </lbz-list>

        <lbz-divider on-background="dark" darkened />

        <!-- Settings -->
        <lbz-list
          type="two-line"
          on-background="dark"
          darkened
          subtitle="Settings"
        >
          <lbz-list-item>
            <span class="lbz-list-item__title">Language</span>
            <span class="lbz-list-item__subtitle">English</span>
          </lbz-list-item>
          <lbz-list-item>
            <span class="lbz-list-item__title">Theme</span>
            <span class="lbz-list-item__subtitle">System default</span>
          </lbz-list-item>
        </lbz-list>

        <lbz-divider on-background="dark" darkened />

        <!-- Communities -->
        <lbz-list
          tag="nav"
          item-tag="a"
          on-background="dark"
          darkened
          subtitle="Communities"
        >
          <lbz-list-item href="https://github.com/bizhong" target="_blank"
            >GitHub</lbz-list-item
          >
          <lbz-list-item
            href="https://juejin.im/user/5acce57b5188255c93239e72/posts"
            target="_blank"
            >掘金</lbz-list-item
          >
          <lbz-list-item
            href="https://zhuanlan.zhihu.com/bizhong"
            target="_blank"
            >知乎专栏</lbz-list-item
          >
          <lbz-list-item
            href="https://www.jianshu.com/u/9281723851d6"
            target="_blank"
            >简书</lbz-list-item
          >
          <lbz-list-item class="lbz-state-no-before--descendant"
            >微信订阅号</lbz-list-item
          >
        </lbz-list>

        <lbz-divider on-background="dark" darkened />

        <p>© {{ new Date().getFullYear() }} LAN Bizhong</p>
      </template>
      <template #front-center>
        <nuxt keep-alive :keep-alive-props="{ max: 10 }" role="main" />
      </template>
    </lbz-backdrop>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import IconLogo from '~/assets/img/icon/layers.svg?inline'
import IconArrowBack from '~/assets/img/icon/arrow_back.svg?inline'
import IconClose from '~/assets/img/icon/close.svg?inline'
import IconMenu from '~/assets/img/icon/menu.svg?inline'
import IconRefresh from '~/assets/img/icon/refresh.svg?inline'

export default Vue.extend({
  components: {
    IconLogo,
    IconArrowBack,
    IconClose,
    IconMenu,
    IconRefresh
  },

  data: () => ({
    visActive: false
  }),

  computed: {
    cisHomePage(): boolean {
      return this.$route.name === 'index'
    },

    cgetTitle(): string {
      const name = this.$route.name

      if (!name) {
        return '404'
      } else {
        return name === 'index' ? 'home' : name
      }
    }
  },

  watch: {
    '$route.name'(): void {
      if (this.visActive) {
        this.visActive = false
      }
    }
  },

  methods: {
    fgoBack(): void {
      if (this.cisHomePage) {
        this.frefresh()
      } else {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    },

    frefresh(): void {
      window.location.reload()
    }
  }
})
</script>

<style lang="less">
body {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Helvetica Neue', Arial, 'PingFang SC', 'Microsoft YaHei UI',
    'Microsoft YaHei', sans-serif;
  .lbz-typography('body1');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--lbz-theme-text-medium-emphasis-on-surface);
}

.lbz-backdrop.backdrop {
  .lbz-top-app-bar {
    .lbz-top-app-bar__title {
      flex: none;
      width: 360px / 2 - 4px - 56px - 12px;
      text-transform: capitalize;
    }

    .lbz-top-app-bar__end {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
      width: 360px / 2 - 12px - 4px;
    }
  }

  .lbz-tab {
    flex: 1;

    .lbz-tab-item {
      .lbz-typography('subtitle1');
    }

    .lbz-tab-item__indicator {
      border-top-width: 3px;
      border-radius: 3px 3px 0 0;
    }
  }

  .lbz-list {
    &.lbz-is-nav {
      display: none;
    }

    &:not(.lbz-is-nav) {
      margin: 0 -16px;
    }
  }

  .lbz-backdrop__front-layer {
    border-top-right-radius: 0;
  }

  @media #lbz-layout-grid.breakpoint[mobile] {
    .lbz-tab {
      display: none;
    }

    .lbz-list.lbz-is-nav {
      display: block;
    }

    @supports (top: env(safe-area-inset-top)) {
      @headerHeight: ~'56px + env(safe-area-inset-top)';

      .lbz-backdrop__back-layer__header {
        height: calc(@headerHeight);
      }

      .lbz-top-app-bar {
        top: env(safe-area-inset-top);
      }

      .lbz-backdrop__front-layer {
        height: calc(100% - (@headerHeight));
        transform: translate3d(0, calc(@headerHeight), 0);
      }

      // active
      &.lbz-is-active .lbz-backdrop__front-layer {
        transform: translate3d(0, calc((100% + @headerHeight) - 130px), 0);
      }
    }
  }
}
</style>

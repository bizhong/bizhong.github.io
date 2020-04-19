<template>
  <lbz-backdrop
    class="backdrop"
    :active.sync="isActive"
    background="dark"
    scrim
  >
    <template #back-start>
      <lbz-top-app-bar background="dark" :title="getTitle" role="banner">
        <template #start>
          <lbz-icon-button
            on-background="dark"
            darkened
            :title="isHomePage ? 'Refresh' : 'Back'"
            @click.stop="back"
          >
            <IconLogo v-if="isHomePage" />
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
            <lbz-tab-item
              v-for="item of NAVIGATION"
              :key="item.label"
              :to="item.to"
              >{{ item.label }}</lbz-tab-item
            >
          </lbz-tab>
        </template>
        <template #end>
          <lbz-icon-button
            :active.sync="isActive"
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
            @click.stop="refresh"
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
        <lbz-list-item
          v-for="item of NAVIGATION"
          :key="item.label"
          :to="item.to"
          >{{ item.label }}</lbz-list-item
        >
      </lbz-list>

      <lbz-divider on-background="dark" darkened />

      <!-- Settings -->
      <client-only placeholder="Loading...">
        <lbz-list
          type="two-line"
          on-background="dark"
          darkened
          subtitle="Settings"
        >
          <lbz-list-item
            v-for="(item, index) of filter(SETTINGS)"
            :key="index"
            @click.stop="settings(index)"
          >
            <span class="lbz-list-item__title">{{ item.title }}</span>
            <span class="lbz-list-item__subtitle">{{ subtitle(index) }}</span>
          </lbz-list-item>
        </lbz-list>
      </client-only>

      <lbz-divider on-background="dark" darkened />

      <!-- Communities -->
      <lbz-list
        tag="nav"
        item-tag="a"
        on-background="dark"
        darkened
        subtitle="Communities"
      >
        <lbz-list-item
          v-for="(item, index) of COMMUNITIES"
          :key="index"
          :href="item.href"
          target="_blank"
          >{{ item.label }}</lbz-list-item
        >
        <lbz-list-item class="lbz-state-no-before--descendant">
          <img
            src="~/assets/img/wechat-qrcode.jpg"
            width="172px"
            height="172px"
            title="微信订阅号"
            alt="兰必钟个人订阅号"
          />
        </lbz-list-item>
      </lbz-list>

      <lbz-divider on-background="dark" darkened />

      <p>© {{ new Date().getFullYear() }} LAN Bizhong</p>
    </template>
    <template #front-center>
      <nuxt keep-alive :keep-alive-props="{ max: 10 }" role="main" />

      <!-- Dialog -->
      <lbz-dialog
        :active.sync="dialog.language.active"
        type="simple"
        :title="dialog.language.title"
        append-to-body
      >
        <template #center>
          <lbz-list dense>
            <lbz-list-item
              v-for="(item, index) of dialog.language.content"
              :key="index"
              @click.stop="setLanguage(index)"
            >
              <template #start>
                <lbz-radio v-model="dialog.language.radio" :value="index" />
              </template>
              <template #center>{{ item }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-dialog>
      <lbz-dialog
        :active.sync="dialog.theme.active"
        type="simple"
        :title="dialog.theme.title"
        append-to-body
      >
        <template #center>
          <lbz-list dense>
            <lbz-list-item
              v-for="(item, index) of dialog.theme.content"
              :key="index"
              @click.stop="setTheme(index)"
            >
              <template #start>
                <lbz-radio v-model="dialog.theme.radio" :value="index" />
              </template>
              <template #center>{{ item }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-dialog>
    </template>
  </lbz-backdrop>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  lbzfCancelContextmenu,
  lbzfChangeModeHandler,
  lbzfIsDarkModeEnabled,
  lbzfSupportsCssVariables
} from '@lbzui/vue/src/utils/funcs'

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
    NAVIGATION: [
      {
        to: '/',
        label: 'Home'
      },
      {
        to: '/articles',
        label: 'Articles'
      }
    ],
    SETTINGS: [
      {
        title: 'Language',
        subtitle: ['English', '简体中文']
      },
      {
        title: 'Theme',
        subtitle: ['System default', 'Light', 'Dark']
      }
    ],
    COMMUNITIES: [
      {
        href: 'https://github.com/bizhong',
        label: 'GitHub'
      },
      {
        href: 'https://juejin.im/user/5acce57b5188255c93239e72/posts',
        label: '掘金'
      },
      {
        href: 'https://zhuanlan.zhihu.com/bizhong',
        label: '知乎专栏'
      },
      {
        href: 'https://www.jianshu.com/u/9281723851d6',
        label: '简书'
      }
    ],

    supportsCssVars: lbzfSupportsCssVariables(),
    isActive: false,

    dialog: {
      language: {
        active: false,
        radio: 0,
        title: 'Choose language',
        content: ['English', '简体中文']
      },
      theme: {
        active: false,
        radio: 0,
        title: 'Choose theme',
        content: ['System default', 'Light', 'Dark']
      }
    }
  }),

  computed: {
    isHomePage(): boolean {
      return this.$route.name === 'index'
    },

    getTitle(): string {
      const name: string = this.$route.name || ''

      return !name
        ? '404'
        : name === 'index'
        ? process.env.SITE_NAME || ''
        : name
    }
  },

  watch: {
    '$route.name'(): void {
      if (this.isActive) {
        this.isActive = false
      }
    }
  },

  mounted(): void {
    const language: number = Number(localStorage.getItem('LANGUAGE'))
    this.setLanguage(language)

    if (this.supportsCssVars) {
      const theme: number = Number(localStorage.getItem('THEME'))
      this.setTheme(theme)
      lbzfChangeModeHandler(this.setTheme)
    }

    lbzfCancelContextmenu()
  },

  methods: {
    back(): void {
      this.isHomePage
        ? this.refresh()
        : window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },

    refresh(): void {
      window.location.reload()
    },

    filter(arr: any[]): any[] {
      const newArr: any[] = JSON.parse(JSON.stringify(arr))

      if (!this.supportsCssVars) {
        newArr.splice(1)
      }

      return newArr
    },

    settings(i: number): void {
      !i ? this.openLanguage() : this.openTheme()
    },

    subtitle(i: number): string {
      const radio: number = this.dialog[!i ? 'language' : 'theme'].radio

      return this.SETTINGS[i].subtitle[radio]
    },

    openLanguage(): void {
      this.dialog.language.active = true
    },

    setLanguage(i: number): void {
      const _language: any = this.dialog.language

      _language.radio = i

      if (_language.active) {
        _language.active = false
        localStorage.setItem('LANGUAGE', String(i))
      }
    },

    openTheme(): void {
      if (this.supportsCssVars) {
        this.dialog.theme.active = true
      }
    },

    setTheme(i?: number): void {
      const _theme: any = this.dialog.theme
      let isDark: boolean = false

      if (i !== undefined) {
        _theme.radio = i

        if (_theme.active) {
          _theme.active = false
          localStorage.setItem('THEME', String(i))
        }

        isDark = !i ? lbzfIsDarkModeEnabled() : i === 2
        document.documentElement.setAttribute(
          'data-lbz-theme',
          isDark ? 'dark' : 'light'
        )
      } else if (i === undefined && !_theme.radio) {
        isDark = lbzfIsDarkModeEnabled()
        document.documentElement.setAttribute(
          'data-lbz-theme',
          isDark ? 'dark' : 'light'
        )
      }
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

.lbz-top-app-bar {
  text-transform: capitalize;
}

.lbz-backdrop.backdrop {
  .lbz-backdrop__back-layer {
    .lbz-tab {
      display: none;
      flex: 1;

      .lbz-tab-item {
        .lbz-typography('body1');
      }

      .lbz-tab-item__indicator {
        border-top-width: 3px;
        border-radius: 3px 3px 0 0;
      }
    }

    .lbz-list:not(.lbz-is-nav) {
      margin-right: -16px;
      margin-left: -16px;
    }

    @media #lbz-layout-grid.breakpoint[desktop] {
      .lbz-top-app-bar__title {
        flex: none;
        width: 480px / 2 - 2 * 12px - 56px;
      }

      .lbz-tab {
        display: block;
      }

      .lbz-top-app-bar__end {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        width: 480px / 2 - 2 * 12px;
      }

      .lbz-list.lbz-is-nav {
        display: none;

        + .lbz-divider {
          display: none;
        }
      }
    }
  }

  .lbz-backdrop__front-layer {
    border-top-right-radius: 0;
  }

  @media #lbz-layout-grid.breakpoint[mobile] {
    @supports (top: env(safe-area-inset-top)) {
      @headerHeight: ~'56px + env(safe-area-inset-top)';

      .lbz-backdrop__back-layer__header {
        height: calc(@headerHeight);

        .lbz-top-app-bar {
          top: env(safe-area-inset-top);
        }
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

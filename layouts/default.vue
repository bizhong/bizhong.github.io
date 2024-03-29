<template>
  <lbz-backdrop
    ref="backdrop"
    class="layout-default"
    :active.sync="isActive"
    background="dark"
    scrim
    @scroll="scroll"
  >
    <template #back-start>
      <lbz-top-app-bar background="dark" :title="title" role="banner">
        <template #start>
          <lbz-icon-button
            on-background="dark"
            :title="isHomePage ? 'Refresh' : 'Back'"
            @click.stop="back"
          >
            <IconLogo v-if="isHomePage" />
            <IconArrowBack v-else />
          </lbz-icon-button>
        </template>
        <!-- <template #center>
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
        </template> -->
        <template #end>
          <lbz-icon-button
            :active.sync="isActive"
            on-background="dark"
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
            title="Refresh"
            @click.stop="refresh"
            ><IconRefresh
          /></lbz-icon-button>
        </template>
        <template #append>
          <lbz-divider class="layout-default__separator" on-background="dark" />
        </template>
      </lbz-top-app-bar>
    </template>
    <template #back-center>
      <!-- Navigation -->
      <!-- <lbz-list
        tag="nav"
        router-link
        item-tag="a"
        on-background="dark"
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

      <lbz-divider on-background="dark" /> -->

      <!-- Settings -->
      <lbz-list type="two-line" on-background="dark" subheader="Settings">
        <lbz-list-item
          v-for="(item, index) of SETTINGS"
          :key="index"
          :disabled="!supportsCssVars"
          @click.stop="handleSettings(index)"
        >
          <span class="lbz-list-item__title">{{ item.title }}</span>
          <span class="lbz-list-item__subtitle">{{ getSubtitle(index) }}</span>
        </lbz-list-item>
      </lbz-list>

      <lbz-divider on-background="dark" />

      <!-- Community -->
      <lbz-list
        tag="nav"
        item-tag="a"
        on-background="dark"
        subheader="Community"
      >
        <lbz-list-item
          v-for="(item, index) of COMMUNITY"
          :key="index"
          :href="item.href"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <template #center>{{ item.label }}</template>
          <template #end
            ><lbz-icon><IconOpenInNew /></lbz-icon
          ></template>
        </lbz-list-item>
        <!-- <lbz-list-item class="lbz-state-no-before--descendant" :ripple="false">
          <img
            src="~/assets/img/wechat-qrcode.jpg"
            width="172px"
            height="172px"
            alt="微信订阅号"
          />
        </lbz-list-item> -->
      </lbz-list>

      <lbz-divider on-background="dark" />

      <p>© {{ `${new Date().getFullYear()} ${siteName}` }}</p>

      <!-- Apache-2.0 License is NOT allowed to delete -->
      <p class="layout-default__license">
        Build with
        <ComponentLink on-background="dark" href="https://nuxtjs.org/"
          >Nuxt.js</ComponentLink
        >
        and
        <ComponentLink
          on-background="dark"
          href="https://lbzui-vue.lanbizhong.com/"
          >@lbzui/vue</ComponentLink
        >
        by
        <ComponentLink on-background="dark" href="https://lanbizhong.com/"
          >LAN Bizhong</ComponentLink
        >
      </p>
    </template>
    <template #front-center>
      <!-- Page -->
      <nuxt
        keep-alive
        :keep-alive-props="{ max: 10 }"
        class="layout-default__page"
        role="main"
      />
    </template>
    <template #popup>
      <!-- Scroll to top -->
      <lbz-fab
        background="surface"
        :inactive="isActive || isExited"
        title="Scroll to top"
        @click.stop="scrollToTop"
      >
        <IconArrowUpward />
      </lbz-fab>

      <!-- Dialogs -->
      <lbz-dialog
        :active.sync="dialogs.theme.active"
        type="simple"
        :title="dialogs.theme.title"
        append-to-body
      >
        <template #center>
          <lbz-list dense>
            <lbz-list-item
              v-for="(item, index) of SETTINGS[0].items"
              :key="index"
              @click.stop="setTheme(item.value)"
            >
              <template #start>
                <lbz-radio
                  v-model="theme"
                  :value="item.value"
                  color="primary"
                  @change="setTheme"
                />
              </template>
              <template #center>{{ item.label }}</template>
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
    lbzfChangeModeHandler,
    lbzfIsDarkModeEnabled,
    lbzfSupportsCssVariables
  } from '@lbzui/vue/src/utils/funcs'
  import { VueScrollPosition } from '@lbzui/vue/types'

  import ComponentLink from '~/components/Link.vue'

  import IconLogo from '~/assets/img/icon/layers.svg?inline'
  import IconArrowBack from '~/assets/img/icon/arrow_back.svg?inline'
  import IconClose from '~/assets/img/icon/close.svg?inline'
  import IconMenu from '~/assets/img/icon/menu.svg?inline'
  import IconRefresh from '~/assets/img/icon/refresh.svg?inline'
  import IconOpenInNew from '~/assets/img/icon/open_in_new.svg?inline'
  import IconArrowUpward from '~/assets/img/icon/arrow_upward.svg?inline'

  export default Vue.extend({
    name: 'LayoutDefault',

    components: {
      ComponentLink,

      IconLogo,
      IconArrowBack,
      IconClose,
      IconMenu,
      IconRefresh,
      IconOpenInNew,
      IconArrowUpward
    },

    data: () => ({
      // NAVIGATION: [
      //   {
      //     to: '/',
      //     label: 'Home'
      //   },
      //   {
      //     to: '/articles',
      //     label: 'Articles'
      //   }
      // ],
      SETTINGS: [
        {
          title: 'Theme',
          items: [
            {
              value: 'system',
              label: 'System default'
            },
            {
              value: 'light',
              label: 'Light'
            },
            {
              value: 'dark',
              label: 'Dark'
            }
          ]
        }
      ],
      COMMUNITY: [
        {
          href: 'https://github.com/bizhong',
          label: 'GitHub'
        },
        {
          href: 'https://zhuanlan.zhihu.com/bizhong',
          label: '知乎专栏'
        }
      ],

      supportsCssVars: false,
      theme: 'system',
      isDark: false,
      isActive: false,
      isExited: true,

      dialogs: {
        theme: {
          active: false,
          title: 'Choose theme'
        }
      }
    }),

    computed: {
      isHomePage(): boolean {
        return this.$route.name === 'index'
      },

      siteName(): string {
        return process.env.SITE_NAME || ''
      },

      title(): string {
        const name: string = this.$route.name || ''

        return !name ? 'error' : this.isHomePage ? this.siteName : name
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
      this.supportsCssVars = lbzfSupportsCssVariables()

      if (this.supportsCssVars) {
        this.setTheme(localStorage.getItem('THEME') || 'system')
        lbzfChangeModeHandler(this.setTheme)
      }
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

      handleSettings(i: number): void {
        // this.dialogs[!i ? 'language' : 'theme'].active = true
        if (!i) {
          this.dialogs.theme.active = true
        }
      },

      getSubtitle(i: number): string {
        const _items: any[] = this.SETTINGS[i].items
        // const value: string = !i ? this.language : this.theme
        const value: string = this.theme
        const index: number = _items.findIndex(val => {
          return val.value === value
        })

        return _items[index].label
      },

      setTheme(val?: string): void {
        const _theme: any = this.dialogs.theme

        if (val !== undefined) {
          this.theme = val
          this.isDark =
            val === 'system' ? lbzfIsDarkModeEnabled() : val === 'dark'

          document.documentElement.setAttribute(
            'data-lbz-theme',
            this.isDark ? 'dark' : 'light'
          )

          if (_theme.active) {
            localStorage.setItem('THEME', val)
            _theme.active = false
          }
        } else if (val === undefined && this.theme === 'system') {
          this.isDark = lbzfIsDarkModeEnabled()
          document.documentElement.setAttribute(
            'data-lbz-theme',
            this.isDark ? 'dark' : 'light'
          )
        }
      },

      scroll(el: HTMLElement, e: Event, position: VueScrollPosition): void {
        this.isExited = position.scrollTop <= 64
      },

      scrollToTop(): void {
        ;(this.$refs.backdrop as any).fscrollToTop()
      }
    }
  })
</script>

<style lang="less">
  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Helvetica Neue', Arial, 'PingFang SC', 'Microsoft YaHei UI',
      'Microsoft YaHei', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  strong {
    font-weight: 700;
  }

  .lbz-backdrop {
    line-height: 26px;

    &__back-layer {
      .lbz-top-app-bar {
        text-transform: capitalize;
      }

      // .lbz-tab {
      //   display: none;
      //   flex: 1;

      //   &-item {
      //     .lbz-typography('body1');
      //   }

      //   &-item__indicator {
      //     border-top-width: 3px;
      //     border-radius: 3px 3px 0 0;
      //   }
      // }

      .lbz-list:not(.lbz-is-nav) {
        margin-right: -16px;
        margin-left: -16px;
      }

      // @media #lbz-layout-grid.breakpoint[desktop] {
      //   .lbz-top-app-bar__title {
      //     flex: none;
      //     width: 480px / 2 - 2 * 12px - 56px;
      //   }

      //   .lbz-tab {
      //     display: block;
      //   }

      //   .lbz-top-app-bar__end {
      //     display: flex;
      //     flex-flow: row nowrap;
      //     justify-content: flex-end;
      //     align-items: center;
      //     width: 480px / 2 - 2 * 12px;
      //   }

      //   .lbz-list.lbz-is-nav {
      //     display: none;

      //     + .lbz-divider {
      //       display: none;
      //     }
      //   }
      // }
    }

    &__front-layer {
      border-top-right-radius: 0;
      .lbz-surface(1);

      &__content {
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    &__popup {
      .lbz-fab {
        position: fixed;
        right: 0;
        bottom: 0;
        margin: 24px 48px 48px;

        @media #lbz-layout-grid.breakpoint[mobile] {
          margin-right: #lbz-layout-grid.mobile[margin];
        }

        html[data-lbz-theme='dark'] & {
          color: #lbz-theme.dark[on-primary];
          background-color: #lbz-theme.dark[primary];
        }
      }
    }

    @media #lbz-layout-grid.breakpoint[mobile] {
      @supports (top: env(safe-area-inset-top)) {
        @blhhm: calc(
          #lbz-backdrop.back-layer[header-height-mobile] +
            env(safe-area-inset-top)
        );

        &__back-layer__header {
          height: @blhhm;

          .lbz-top-app-bar {
            top: env(safe-area-inset-top);
          }
        }

        &__front-layer {
          height: calc(100% - @blhhm);
          transform: translate3d(0, @blhhm, 0);
        }

        // active
        &.lbz-is-active &__front-layer {
          transform: translate3d(
            0,
            calc((100% + @blhhm) - #lbz-backdrop.front-layer[height-active]),
            0
          );
        }
      }
    }
  }

  .layout-default {
    &__separator {
      visibility: hidden;
    }

    &__license {
      .lbz-typography('body2');
      color: var(--lbz-theme-text-disabled-on-dark);
    }

    &__page {
      margin: 0 auto;
      box-sizing: border-box;
      padding: 48px 0 128px;
      max-width: 2 * 360px + #lbz-layout-grid.desktop[gutter];
      color: var(--lbz-theme-text-high-emphasis-on-surface);
    }

    // active
    &.lbz-is-active &__separator {
      visibility: visible;
    }
  }
</style>

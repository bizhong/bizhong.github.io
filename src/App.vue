<template>
  <lbz-backdrop
    class="backdrop"
    :active.sync="visActive"
    scrim
  >
    <template #back-layer-header>
      <lbz-top-app-bar :title="cgetTitle">
        <template #start>
          <lbz-icon-button on-background="primary" @click.stop="fgoBack">{{ cgetNavIcon }}</lbz-icon-button>
        </template>
        <template #center>
          <lbz-tab
            class="lbz-state-no-before--descendant"
            on-background="primary"
            alignment="center"
            router-link
            item-tag="a"
            on-content
          >
            <lbz-tab-item to="/">Home</lbz-tab-item>
            <lbz-tab-item to="/articles">Articles</lbz-tab-item>
            <lbz-tab-item to="/develop">Develop</lbz-tab-item>
            <lbz-tab-item to="/about">About</lbz-tab-item>
          </lbz-tab>
        </template>
        <template #end>
          <lbz-icon-button
            :active.sync="visActive"
            toggle
            on-background="primary"
            on-icon="close"
            off-icon="menu"
          />
          <lbz-icon-button on-background="primary" @click.stop="frefresh">refresh</lbz-icon-button>
        </template>
      </lbz-top-app-bar>
    </template>
    <template #back-layer-content>
      <lbz-list
        class="is-nav"
        tag="nav"
        router-link
        item-tag="a"
        subtitle="Navigation"
      >
        <lbz-list-item to="/">Home</lbz-list-item>
        <lbz-list-item to="/articles">Articles</lbz-list-item>
        <lbz-list-item to="/develop">Develop</lbz-list-item>
        <lbz-list-item to="/about">About</lbz-list-item>
      </lbz-list>
      <lbz-list type="two-line" subtitle="Settings">
        <lbz-list-item>
          <span class="lbz-list-item__title">Choose language</span>
          <span class="lbz-list-item__subtitle">English</span>
        </lbz-list-item>
        <lbz-list-item>
          <span class="lbz-list-item__title">Choose theme</span>
          <span class="lbz-list-item__subtitle">Automatic (Light: 06:00–18:00 BJT, Dark: 18:00–06:00 BJT)</span>
        </lbz-list-item>
      </lbz-list>
      <lbz-list class="lbz-state-no-before--descendant" subtitle="Links">
        <lbz-list-item>
          <a href="https://github.com/bizhong" target="_blank">GitHub</a>,
          <a href="https://juejin.im/user/5acce57b5188255c93239e72/posts" target="_blank">掘金</a>,
          <a href="https://zhuanlan.zhihu.com/bizhong" target="_blank">知乎专栏</a>,
          <a href="https://www.jianshu.com/u/9281723851d6" target="_blank">简书</a>
        </lbz-list-item>
        <lbz-list-item>微信订阅号</lbz-list-item>
        <lbz-list-item>Email Me</lbz-list-item>
      </lbz-list>
      <p>Build with <a href="https://lbzui-vue.lanbizhong.com/" target="_blank">@lbzui/vue</a></p>
      <p>© 2019 LAN Bizhong</p>
    </template>
    <template #front-layer-content>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </template>
  </lbz-backdrop>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private visActive: boolean = false;

  get cgetTitle(): string {
    switch (this.$route.name) {
      case 'home':
        return 'Home';
      default:
        return '404';
    }
  }

  get cgetNavIcon(): string {
    return this.$route.name === 'home'
      ? 'layers'
      : 'arrow_back';
  }

  @Watch('$route.name')
  private frouteChanged(val: string, oldVal: string): void {
    if (this.visActive) {
      this.visActive = false;
    }
  }

  private fgoBack(e: MouseEvent): void {
    if (this.$route.name === 'home') {
      this.frefresh();
    } else {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
    }
  }

  private frefresh(e?: MouseEvent): void {
    window.location.reload();
  }
}
</script>

<style lang="less">
body {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial,
    "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
  .lbz-typography("body1");
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--lbz-theme-text-medium-emphasis-on-surface);
}

.lbz-backdrop.backdrop {
  .lbz-top-app-bar {
    .lbz-top-app-bar__title {
      flex: none;
      width: 94px;
    }

    .lbz-top-app-bar__end {
      margin-left: 54px;
    }
  }

  .lbz-tab {
    flex: 1;

    .lbz-tab-item {
      .lbz-typography("subtitle1");
    }

    .lbz-tab-item__indicator {
      border-radius: 3px 3px 0 0;
      height: 3px;
    }
  }

  .is-nav {
    display: none;
  }

  .lbz-backdrop__front-layer {
    border-top-right-radius: 0;
  }

  @media #lbz-layout-grid.media[max719] {
    .lbz-tab {
      display: none;
    }

    .is-nav {
      display: block;
    }

    @supports (top: env(safe-area-inset-top)) {
      .lbz-backdrop__back-layer__header {
        height: calc(56px + env(safe-area-inset-top));
      }

      .lbz-top-app-bar {
        top: env(safe-area-inset-top);
      }

      .lbz-backdrop__front-layer {
        height: calc(100% - 56px - env(safe-area-inset-top));
        transform: translate3d(0, calc(56px + env(safe-area-inset-top)), 0);
      }
    }
  }
}
</style>

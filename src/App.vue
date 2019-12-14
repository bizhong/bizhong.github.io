<template>
  <lbz-backdrop :active.sync="visActive" scrim>
    <template #back-layer-header>
      <lbz-top-app-bar :title="cgetTitle">
        <template #start>
          <lbz-icon-button on-background="primary" @click.stop="fgoBack">{{ cgetNavIcon }}</lbz-icon-button>
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
      <div>Back layer content</div>
    </template>
    <template #front-layer-content>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </template>
  </lbz-backdrop>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

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
  .lbz-typography--body1();
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--lbz-theme-text-medium-emphasis-on-surface);
}
</style>

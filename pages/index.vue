<template>
  <article class="page-index">
    <ComponentHero
      title="What’s new"
      subtitle="Browse the latest open-source projects"
    >
      <div class="lbz-layout-grid">
        <lbz-card
          v-for="(item, index) of PROJECTS"
          :key="index"
          class="lbz-layout-grid__cell lbz-layout-grid__span--4 lbz-state-no-before--child"
          type="outlined"
          :ripple="false"
        >
          <template #center>
            <div class="lbz-card__supporting-text">
              <span class="lbz-card__version">{{ item.version }}</span>
              <span class="lbz-card__title">{{ item.title }}</span>
              <span class="lbz-card__subtitle">{{ item.subtitle }}</span>
            </div>
          </template>
          <template #end>
            <div class="lbz-card__actions__buttons">
              <lbz-button
                v-for="button of item.buttons"
                :key="button.label"
                tag="a"
                :href="button.href"
                target="_blank"
                ><template #icon><IconOpenInNew /></template
                >{{ button.label }}</lbz-button
              >
            </div>
          </template>
        </lbz-card>
      </div>
    </ComponentHero>

    <lbz-divider />

    <ComponentHero title="Who am I" subtitle="Bobby, a front-end developer">
      <p>
        Hello! My name is <strong>LAN Bizhong</strong> (simplified Chinese:
        兰必钟, traditional Chinese: 藍必鐘, pinyin: Lán Bìzhōng).
      </p>
      <p>
        I was born on February 26, 1994 in Fuzhou, China. And I graduated from
        <ComponentLink href="https://www.scuec.edu.cn/" rel="nofollow" new-tab
          >South-Central Minzu University</ComponentLink
        >
        on June 31, 2017, where I majored in Computer Science and Technology.
        Since then, I have been working in Shenzhen, China. But hard work, I
        enjoy learning, cooking, running, and watching American and Korean
        dramas.
      </p>
      <p>I am not sure, but I'll try my best to make something awesome.</p>
      <p>
        Get in touch? Email me at
        <ComponentLink href="mailto:bizhong_lan@163.com" rel="nofollow"
          >bizhong_lan@163.com</ComponentLink
        >.
      </p>
      <p class="page-index__slogan">Live seriously, work happily.</p>
    </ComponentHero>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import IconOpenInNew from '~/assets/img/icon/open_in_new.svg?inline'

import ComponentHero from '~/components/Hero.vue'
import ComponentLink from '~/components/Link.vue'

export default Vue.extend({
  name: 'PageIndex',

  components: {
    IconOpenInNew,

    ComponentHero,
    ComponentLink
  },

  data: () => ({
    PROJECTS: [
      {
        version: 'Beta',
        title: '@lbzui/vue',
        subtitle: 'Material Components for Vue.js',
        buttons: [
          {
            href: 'https://github.com/lbzui/vue',
            label: 'GitHub'
          },
          {
            href: 'https://lbzui-vue.lanbizhong.com/',
            label: 'Doc'
          }
        ]
      },
      {
        version: 'v2.1.4',
        title: 'Bizhongbio',
        subtitle: 'A free, minimalistic, and responsive WordPress Blog Theme',
        buttons: [
          {
            href: 'https://github.com/bizhongbio/bizhongbio',
            label: 'GitHub'
          },
          {
            href: 'https://bizhongbio.github.io/',
            label: 'Demo'
          }
        ]
      }
    ]
  })
})
</script>

<style lang="less">
.page-index {
  .lbz-card {
    background-color: transparent;

    &__content {
      flex: auto;
      margin-bottom: 8px;
    }

    &__version {
      .lbz-typography('overline');
      color: var(--lbz-theme-text-high-emphasis-on-surface);
    }

    &__title {
      margin: 10px 0 12px;
    }

    .lbz-button {
      min-width: auto;
    }
  }

  p&__slogan {
    margin-top: 72px;
    font-weight: 500;
    text-transform: uppercase;
  }
}
</style>

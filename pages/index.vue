<template>
  <div class="page--index">
    <section class="section">
      <div class="section__header">
        <h3 class="lbz-typography--h4">What’s new</h3>
        <p class="lbz-typography--body1">
          Browse the latest open-source projects
        </p>
      </div>
      <div class="lbz-layout-grid section__content">
        <lbz-card
          v-for="(item, index) of PROJECTS"
          :key="index"
          class="lbz-layout-grid__cell lbz-layout-grid__span--4 lbz-state-no-before--child"
          type="outlined"
          :ripple="false"
        >
          <template #center>
            <div class="lbz-card__supporting-text">
              <span class="lbz-typography--overline">{{ item.version }}</span>
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
    </section>

    <lbz-divider />

    <section class="section">
      <div class="section__header">
        <h3 class="lbz-typography--h4">Who am I</h3>
        <p class="lbz-typography--body1">Bobby, a front-end developer</p>
      </div>
      <div class="section__content">
        <p>
          Hello! My name is <strong>LAN Bizhong</strong> (simplified Chinese:
          兰必钟, traditional Chinese: 藍必鐘, pinyin: Lán Bìzhōng).
        </p>
        <p>
          I was born on February 26, 1994 in Fuzhou, China. And I graduated from
          <a href="https://www.scuec.edu.cn/" rel="nofollow" target="_blank"
            >South-Central Minzu University<lbz-icon><IconOpenInNew /></lbz-icon
          ></a>
          on June 31, 2017, where I majored in Computer Science and Technology.
          Since then, I have been working in Shenzhen, China. But hard work, I
          enjoy learning, cooking, running, and watching American and Korean
          dramas.
        </p>
        <p>I am not sure, but I'll try my best to make something awesome.</p>
        <p>
          Get in touch? Email me at
          <a href="mailto:bizhong_lan@163.com" rel="nofollow"
            >bizhong_lan@163.com</a
          >.
        </p>
        <p class="slogan">LIVE SERIOUSLY, WORK HAPPILY.</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconOpenInNew from '~/assets/img/icon/open_in_new.svg?inline'

export default Vue.extend({
  name: 'Index',

  components: {
    IconOpenInNew
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
.page--index {
  margin: 0 auto;
  max-width: 15 * 64px;

  .section {
    padding: 48px 0;

    &__header {
      color: var(--lbz-theme-text-high-emphasis-on-surface);

      h3 {
        margin: 0;
      }

      p {
        margin: 8px 0 0;
      }
    }

    &__content {
      padding: 32px 0 0;

      p a {
        &:hover {
          text-decoration: underline;
        }

        .lbz-icon {
          width: 16px;
          height: 16px;
          font-size: 16px;
          color: var(--lbz-theme-outline-on-surface);
        }
      }

      .lbz-card {
        background-color: transparent;

        .lbz-card__content {
          flex: auto;
        }

        .lbz-card__title {
          margin: 4px 0 12px;
        }

        .lbz-button {
          min-width: auto;
        }
      }

      .slogan {
        margin-top: 60px;
      }
    }
  }
}
</style>

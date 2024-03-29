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
          class="lbz-layout-grid__cell lbz-layout-grid__span--6 lbz-state-no-before--child"
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
                rel="nofollow noopener noreferrer"
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
      <p>Hello! My name is <strong>LAN Bizhong</strong>.</p>
      <p>
        After graduating from university, I started working in Shenzhen, China
        on July 14, 2017. And I like to study, code, cook, run, and watch movies
        and TV shows in daily life.
      </p>
      <p>
        Get in touch? Email me at
        <ComponentLink href="mailto:bizhong_lan@163.com" :icon="false"
          >bizhong_lan@163.com</ComponentLink
        >.
      </p>
      <p class="page-index__slogan">Live seriously, work happily.</p>
    </ComponentHero>
  </article>
</template>

<script lang="ts">
  import Vue from 'vue'

  import ComponentHero from '~/components/Hero.vue'
  import ComponentLink from '~/components/Link.vue'

  import IconOpenInNew from '~/assets/img/icon/open_in_new.svg?inline'

  export default Vue.extend({
    name: 'PageIndex',

    components: {
      ComponentHero,
      ComponentLink,

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
          version: 'v2.1.5',
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
    .lbz-layout-grid {
      padding-right: 0;
      padding-left: 0;
    }

    .lbz-card {
      background-color: transparent;

      &__content {
        flex: 1;
      }

      &__version {
        .lbz-typography('overline');
      }

      &__title {
        margin: 10px 0 16px;
      }

      .lbz-button {
        min-width: auto;
      }
    }

    & &__slogan {
      margin-top: 72px;
      font-weight: 500;
      text-transform: uppercase;
    }
  }
</style>

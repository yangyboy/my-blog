<template>
  <div>
    <nav-header/>
    <nuxt/>
    <nav-footer/>
  </div>
</template>
<script>
  import NavHeader from '~/components/NavHeader.vue'
  import NavFooter from '~/components/Footer.vue'

  export default {
    components: {
      NavHeader,
      NavFooter
    },
    head() {
      return {
        title: 'mocc的博客-个人的心得与分享',
        meta: [
          {hid: 'description', name: 'description', content: 'mocc的个人博客，是一个记录博主学习和成长的自媒体博客。关注于java全栈技术的学习。'},
          {hid: 'keywords', name: 'keywords', content: 'mocc,杨洋,互联网,自媒体,杨洋博客,科技博客,独立博客,个人博客,原创博客,java,spring,springBoot'},
          {hid: 'author', content: 'mocc'}
        ]
      }
    }
  }
</script>

<template>
  <div>
    <article v-if="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null
    }
  },
  mounted() {
    for(let post of this.$store.state.posts) {
      if(post.id == this.$route.params.id) {
        this.post = post
      }
    }
    if(!this.post) {
      // 記事が存在しない場合、トップへ
      this.$router.push("/")
    }
  },
}
</script>

<template>
  <div>
    <h1 class="title">My Blog App</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <!-- router-linkを使用した画面遷移では、state の値は引き継がれ次のページにも反映される -->
        <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

// 各コンポーネント内では Vuex ストアが自動的にロードされる
export default {
  components: {
    AppLogo
  },
  data() {
    return {}
  },
  computed: {
    posts() {
      // Vuexストアはコンポーネント間で共有の値を管理するためのデータストアの仕組み
      return this.$store.state.posts
    }
  },
  mounted: function() {
    // mounted フック内で this.$store.dispatch 関数を呼び出すことで、load アクションを実行して state 内の posts の値を更新している
    this.$store.dispatch("load")
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>


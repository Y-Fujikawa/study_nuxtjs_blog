import axios from "axios"

// state コンポーネントで使用するデータ
export const state = () => ({
  // 投稿一覧の posts を定義
  posts: []
})

// mutations stateを変化させるための同期関数
export const mutations = {
  set (state, items) {
    state.posts = items
  },
}

// actions 実際に非同期処理などを用いてデータを変更する関数
export const actions = {
  load (ctx) {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((result) => {
      // mutations の set で items を使う
      ctx.commit("set", result.data)
    })
  }
}
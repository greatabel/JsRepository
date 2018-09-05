<template>
   <main class="faq">
     <h1>经常被问的问题</h1>

     <Loading v-if="remoteDataBusy" />

     <div class="error" v-if="hasRemoteErrors">
        加载问题列表失败
     </div>

     <section class="list">
         <article v-for="question of questionList">
             <h2 v-html="question.title"></h2>
             <p v-html="question.content"></p>
         </article>
     </section>

   </main>
</template>

<script>
import RemoteData from '../mixins/RemoteData'

export default {
  mixins: [
    RemoteData({
        questionList: 'questions',
    })

  ],

  data () {
    return {
        questions: [],
        error: null,
        loading: false,
        // remoteDataLoading: 42,
    }
  },

  // async created () {
  //   this.loading = true
  //   try {
  //           // const response = await fetch('http://localhost:3000/questions')
  //           // if (response.ok) {
  //           //     this.questions = await response.json()
  //           // } else {
  //           //     throw new Error('error')
  //           // }
  //       this.questions = await this.$fetch('questions')

  //       } catch (e) {
  //           this.error = e
  //       }
  //   this.loading = false

  // },
}
</script>
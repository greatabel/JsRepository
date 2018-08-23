<template>
   <main class="faq">
     <h1>经常被问的问题</h1>

     <div class="error" v-if="error">
        加载问题失败
     </div>

     <section class="list">
         <article v-for="question of questions">
             <h2 v-html="question.title"></h2>
             <p v-html="question.content"></p>
         </article>
     </section>

   </main>
</template>

<script>
export default {
  data () {
    return {
        questions: [],
        error: null,
    }
  },
  created () {
    fetch('http://localhost:3000/questions').then(response => {
        if(response.ok) {
            return response.json()
        } else {
            return Promise.reject('error')
        }
    }).then(result => {
        this.questions = result
    }).catch(e => {
        this.error = e
    })

  },
}
</script>
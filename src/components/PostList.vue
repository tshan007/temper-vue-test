<template>
  <div class="flex-1 text-gray-700 px-4 py-2 m-2">
    <div class="w-full h-12 text-left font-bold">
      <p>Sortable Post List</p>
    </div>
    <div class="w-full" v-bind:key="post.id" v-for="(post, index) in posts">
      <Post
        v-bind:post="post"
        v-bind:index="index"
        v-bind:isFirst="isFirstElement(index)"
        v-bind:isLast="isLastElement(index, posts.length)"
      />
    </div>
  </div>
</template>

<script>
import Post from './Post'
import { mapGetters } from 'vuex'

export default {
  name: 'PostList',
  components: {
    Post
  },
  computed: {
    ...mapGetters(['posts'])
  },
  methods: {
    isFirstElement (index) {
      return index === 0
    },
    isLastElement (index, count) {
      return index === count - 1
    }
  }
}
</script>

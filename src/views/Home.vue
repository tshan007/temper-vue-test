<template>
  <div class="flex container mx-auto bg-gray-100 p-8">
    <PostList />
    <ActionList />
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue'
import ActionList from '@/components/ActionList.vue'
import { FETCH_POSTS } from '@/store/actions.types'

// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    PostList,
    ActionList
  },
  mounted () {
    this.$store.dispatch(FETCH_POSTS)
  }
}
</script>

<template>
  <div class="max-w-lg w-full lg:flex shadow-lg h-20 bg-white mb-8">
    <div class="lg:w-3/4 py-4 pl-6 text-left">{{post.title}}</div>
    <div class="lg:w-1/4">
      <div class="lg:w-full py-2 pr-4 text-right" :class="[isFirst? 'invisible':'']">
        <font-awesome-icon
          :icon="['fas', 'angle-up']"
          class="cursor-pointer text-purple-600"
          v-on:click="changeOrder(index, index-1)"
        >
          <!-- <input type="button" /> -->
        </font-awesome-icon>
      </div>
      <div class="lg:w-full py-2 pr-4 text-right" :class="[isLast? 'invisible':'']">
        <font-awesome-icon
          :icon="['fas', 'angle-down']"
          class="cursor-pointer text-purple-600"
          v-on:click="changeOrder(index, index+1)"
        >
          <!-- <input type="button" /> -->
        </font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { FETCH_POST_ORDER } from '@/store/actions.types'

export default {
  name: 'Post',
  props: ['post', 'isFirst', 'isLast', 'index'],
  methods: {
    changeOrder (current, next) {
      this.$store.dispatch(FETCH_POST_ORDER, { current, next })
    }
  }
}
</script>

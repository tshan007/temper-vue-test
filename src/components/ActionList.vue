<template>
  <div class="flex-1 m-2">
    <div class="w-full h-16 text-left bg-white py-4 pl-5 font-bold">
      <p class="my-2">List of actions commited</p>
    </div>
    <div class="w-full shadow-lg p-6">
      <div class="w-full" v-bind:key="index" v-for="(action, index) in actions">
        <Action v-bind:action="action" v-bind:index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import Action from './Action.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ActionList',
  components: {
    Action
  },
  computed: {
    ...mapGetters(['actions'])
  }
}
</script>

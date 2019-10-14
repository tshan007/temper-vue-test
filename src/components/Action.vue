<template>
  <div
    class="max-w-lg w-full lg:flex shadow-lg border-solid border-b-2 border-gray-400 bg-white"
  >
    <div class="lg:w-2/3 py-6 pl-6 text-left">{{composeActionTitle(action)}}</div>
    <div class="lg:w-1/3 py-6">
      <button
        v-on:click="timeTravel(index)"
        class="bg-green-600 hover:bg-green-400 text-white font-medium py-2 px-4 rounded"
      >Time travel</button>
    </div>
  </div>
</template>

<script>
import { FETCH_POST_REORDER } from '@/store/actions.types'

export default {
  name: 'Action',
  props: ['action', 'index'],
  methods: {
    timeTravel (index) {
      this.$store.dispatch(FETCH_POST_REORDER, index)
    },
    composeActionTitle (action) {
      return `Moved ${action.title} from index ${action.current} to index ${action.next}`
    }
  }
}
</script>

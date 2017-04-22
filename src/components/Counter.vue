<template>
<div>
  <button @click="increment">{{$store.state.counterValue}}</button>
</div>
</template>

<script>
import {
  mapActions,
  mapGetters,
} from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'countNum'
    ])
  },
  methods: mapActions([
    'increment', 'decrement', 'clear',
  ]),
}
</script>

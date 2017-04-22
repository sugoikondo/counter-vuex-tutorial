<template>
<div class="">
  <div>
    {{$store.state.counterValue}}
  </div>
  <div>
    <button @click="increment">+</button>
    <button type="button" @click="decrement">-</button>
    <button type="button" @click="clear">clear</button>
  </div>
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

<template>
<div>
  <button type="button" @click="increment()">{{countNum}}</button>
</div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex';

export default {
  methods: {
    ...mapActions([
      'increment', 'decrement', 'clear',
    ]),
    ...mapGetters([
      'countNum'
    ])
  },
}
</script>

<style>

</style>

<template>
  <div class="hello">
    <my-heading text="Heading" />

    <my-text text="Text" />

    <my-text-input placeholder="Text Input" />
  </div>
</template>

<script>
import { MyHeading, MyText, MyTextInput } from '@stencil-ui/vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: [
    MyHeading,
    MyText,
    MyTextInput
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

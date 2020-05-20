<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <Board/>
      </div>
    </div>
  </section>

</template>
<script>


  import Board from "../components/Board";
  export default {
    name:"SinglePlayer",
    components: {Board},

  }
</script>


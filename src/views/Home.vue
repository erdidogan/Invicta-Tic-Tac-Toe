<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          🏆 Tic Tac Toe 🕹
        </h1>
          <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <router-link :to="{name: 'SinglePlayer'}">
                <button class="button is-success"   >Click hero to play!</button>
              </router-link>
            </p>
          </div>
      </div>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Tic Tac Toe</strong> by <a href="https://erdidogan.com">Erdi Doğan</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. You can find source code on
           <a href="https://github.com/erdidogan/Invicta-Tic-Tac-Toe">Github</a>.
        </p>
      </div>
    </footer>
  </section>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
}
</script>

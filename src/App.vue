<template>
  <div id="app">
    <header>
      <nav class='header_nav'>
        <router-link class="nav-link" to="/">
          <div class='psevdo-logo'>
            <span class='katy-berry'>Random</span>
            <span class='katy-berry'>beer!</span>
          </div>
        </router-link>
        <router-link class="nav-link" to="/profile">
          <button class='profile-pic'> 

          </button>
        </router-link>
      </nav>
    </header>
    <main class="content">
      <router-view />
    </main>
    <footer>
      <span>
        <a href='https://github.com/kloverina'>kloverina </a>, 2022
      </span>
    </footer>
  </div>
</template>


<style lang='scss'>
  @import "styles/index";
</style>

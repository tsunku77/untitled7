<template>
  <div id="app">
    <h1>hello app</h1>
    <router-link to="/bar">Bar</router-link><br>
    <router-link to="/foo">Foo</router-link><br>
    <router-link to="/helloWorld">HELLO</router-link><br>
    <router-link to="/about">about</router-link><br>
    <router-link to="/">main</router-link><br>
    <router-link to="/post">post</router-link>
    <router-view></router-view>


    <p>현재일 : {{$moment().format('YYYY-MM-DD HH:mm:ss') }}</p>


  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>
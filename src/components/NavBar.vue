<template>
  <nav id="nav">
    <router-link to="/">Dashboard</router-link>
    <router-link to="/add">Add Habit</router-link>
    <router-link to="/progress">Progress</router-link>
    <router-link to="/pricing">Pricing</router-link>
  </nav>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  name: 'NavBar',
  components: { NavLink }
}
</script>

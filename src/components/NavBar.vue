<template>
  <nav id="nav">
    <router-link to="/" class="logo">
      <span class="logo-icon">🍃</span>
      Habit Tracker
    </router-link>
    <div class="nav-links">
      <NavLink to="/" label="Dashboard" icon="fa-chart-line" />
      <NavLink to="/myhabits" label="My habits" icon="fa-list-check" />
      <NavLink to="/progress" label="Progress" icon="fa-bar-chart" />
      <NavLink to="/pricing" label="Pricing" icon="fa-dollar-sign" />
    </div>
  </nav>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  name: 'NavBar',
  components: { NavLink }
}
</script>

<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #008060;
  font-family: 'Nunito', sans-serif;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  gap: 8px;
  font-family: 'Nunito', sans-serif;
  text-decoration: none;
}

.logo-icon {
  font-size: 1.8rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

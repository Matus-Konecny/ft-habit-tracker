<template>
  <router-link 
    :to="to"
    class="nav-link"
    :class="{ 'router-link-active': isActive }">
    <i v-if="icon" :class="['fas', icon]"></i>
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    to: { type: String, required: true },
    label: { type: String, required: true },
    icon: { type: String, default: null }
  },
  computed: {
    isActive() {
      return this.$route.path === this.to
    }
  }
}
</script>

<style scoped>
.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  position: relative;
  font-family: 'Nunito', sans-serif;
}

.nav-link:hover {
  color: #008060;
  opacity: 0.8;
}

.nav-link.router-link-active {
  color: #008060;
  border-bottom-color: #008060;
  font-weight: 600;
}

.nav-link i {
  font-size: 1.1rem;
}
</style>

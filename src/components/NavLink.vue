<template>
  <li>
    <router-link 
      :to="to" 
      :class="{ 'router-link-active': $route.path === to }"
      class="nav-link">{{ label }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    to: { type: String, required: true },
    label: { type: String, required: true }
  }
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <span class="card-title">{{ title }}</span>
      <span class="card-icon">
        <i :class="['fas', icon]"></i>
      </span>
    </div>
    <div class="card-value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    title: { type: String, required: true },
    value: { type: String, required: true },
    icon: { type: String, required: true }
  }
}
</script>

<style scoped>
.card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  font-family: 'Nunito', sans-serif;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-title {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

.card-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.card-icon i:nth-of-type(1) {
  color: #008060;
  background: rgba(0, 128, 96, 0.1);
}

.card-value {
  font-size: 2.2rem;
  font-weight: 700;
  color: #000;
}
</style>

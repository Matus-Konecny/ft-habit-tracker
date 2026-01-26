<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <h1>Dnešný prehľad</h1>
      <p class="date">Pondelok 26. Januára</p>
    </div>
    
    <div class="cards-grid">
      <DashboardCard 
        title="Dnešné návyky"
        value="0/0"
        icon="fa-check-circle"
      />
      <DashboardCard 
        title="Celkovo návykov"
        value="0"
        icon="fa-ring"
      />
      <DashboardCard 
        title="Najdlhší streak"
        value="0 dní"
        icon="fa-fire"
      />
      <DashboardCard 
        title="Priemerná úspešnosť"
        value="0%"
        icon="fa-chart-line"
      />
    </div>
  </div>
</template>

<script>
import DashboardCard from '@/components/Dashboard.vue'

export default {
  name: 'Dashboard',
  components: { DashboardCard }
}
</script>

<style scoped>
.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 30px 40px;
  font-family: 'Nunito', sans-serif;
}

.dashboard-header {
  margin-bottom: 40px;
}

.dashboard-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
  margin: 0 0 8px 0;
  font-family: 'Nunito', sans-serif;
}

.date {
  font-size: 0.95rem;
  color: #888;
  margin: 0;
  font-family: 'Nunito', sans-serif;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .dashboard-container {
    padding: 90px 20px 40px;
  }

  .dashboard-header h1 {
    font-size: 1.8rem;
  }

  .cards-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
}
</style>

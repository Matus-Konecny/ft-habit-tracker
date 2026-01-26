<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <h1>Today's Dashboard</h1>
      <p class="date">{{ currentDate }}</p>
    </div>
    
    <div class="cards-grid">
      <DashboardCard 
        title="Today's completed habits"
        value="0/0"
        icon="fa-check-circle"
      />
      <DashboardCard 
        title="Count of habits"
        value="0"
        icon="fa-ring"
      />
      <DashboardCard 
        title="Longest streak"
        value="0 dní"
        icon="fa-fire"
      />
      <DashboardCard 
        title="Average success rate"
        value="0%"
        icon="fa-chart-line"
      />
    </div>
  </div>
</template>

<script>
import DashboardCard from '../components/DashboardCard.vue'

export default {
  name: 'Dashboard',
  components: { DashboardCard },
  data() {
    return {
      currentDate: ''
    }
  },
  mounted() {
    this.updateDate()
  },
  methods: {
    updateDate() {
      const date = new Date()
      
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December']
      
      const dayName = daysOfWeek[date.getDay()]
      const day = date.getDate()
      const month = months[date.getMonth()]
      
      this.currentDate = `${dayName} ${day}. ${month}`
    }
  }
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

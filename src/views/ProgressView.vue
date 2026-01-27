<template>
  <div class="progress-container">
    <div class="progress-header">
      <h1>My progress</h1>
      <p class="subtitle">Track your progress across all your habits</p>
    </div>

<div class="table-wrapper">
  <table class="progress-table">
    <thead>
      <tr>
        <th>Habit</th>
        <th>Category</th> 
        <th>Current Streak</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="habit in habits" :key="habit.id">
        <td>{{ habit.name }}</td>
        <td class="col-category">
  <span 
    class="category-badge" 
    :style="{ backgroundColor: habitsStore.getCategoryColor(habit.category) }"
  >
    {{ habit.category }}
  </span>
</td>

        <td>{{ habit.streak }}</td>
        <td>
          <ProgressCheckbox :habitId="habit.id" @checked="handleCheckboxChange" />
        </td>
      </tr>
    </tbody>
  </table>
</div>

  </div>
</template>

<script>
import { useHabitsStore } from '../stores/habitsStore'
import ProgressCheckbox from '../components/ProgressCheckbox.vue'

export default {
  name: 'Progress',
  components: { ProgressCheckbox },

  computed: {
    habitsStore() {
      return useHabitsStore()
    },
    habits() {
      return this.habitsStore.habits || []
    }
  },
}
</script>

<style scoped>
.progress-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 30px 40px;
  font-family: 'Nunito', sans-serif;
}

.progress-header {
  margin-bottom: 40px;
}

.progress-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
  margin: 0 0 8px 0;
}

.subtitle {
  font-size: 0.95rem;
  color: #888;
  margin: 0;
}

.table-wrapper {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.progress-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Nunito', sans-serif;
  table-layout: fixed;
  border-spacing: 0;
  background: white;
}

.progress-table thead {
  background-color: #f5f5f5;
  border-bottom: 2px solid #e0e0e0;
}

.progress-table thead th {
  padding: 16px 20px;
  text-align: left;
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  text-transform: none;
}

.progress-table tbody tr {
  border-bottom: 1px solid #dee2e6;
  transition: background-color 0.3s ease;
}

.progress-table tbody tr:hover {
  background-color: #f0f8ff;
}

.progress-table tbody tr:last-child {
  border-bottom: none;
}

.progress-table td {
  padding: 16px 20px;
  vertical-align: middle;
  color: #333;
  border-bottom: 1px solid #eee;
}

.col-habit {
  width: 40%;
}

.col-category {
  width: 25%;
}

.col-streak {
  width: 20%;
  text-align: center;
}

.col-action {
  width: 15%;
  text-align: center;
}

.habit-name {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  color: #000;
}

.habit-name i {
  font-size: 1.2rem;
  color: #008060;
}

.category-badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  color: white !important;
  font-size: 0.85rem;
  font-weight: 500;
}

.streak-number {
  font-size: 1.3rem;
  font-weight: 700;
  color: #008060 !important;
}

@media (max-width: 768px) {
  .progress-container {
    padding: 90px 20px 40px;
  }

  .progress-header h1 {
    font-size: 1.8rem;
  }

  .progress-table {
    font-size: 0.9rem;
  }

  .progress-table thead th,
  .progress-table td {
    padding: 12px 10px;
  }

  .col-habit {
    width: 35%;
  }

  .col-category {
    width: 25%;
  }

  .col-streak {
    width: 20%;
  }

  .col-action {
    width: 20%;
  }

  .habit-name {
    gap: 8px;
  }

  .habit-name i {
    font-size: 1rem;
  }
}
</style>

<template>
  <div class="progress-container">
    <div class="progress-header">
      <h1>Môj Progress</h1>
      <p class="subtitle">Sleduj svoj pokrok vo všetkých návykoch</p>
    </div>

    <div class="table-wrapper">
      <table class="progress-table">
        <thead>
          <tr>
            <th class="col-habit">
              <i class="fas fa-feather-alt"></i> Návyk
            </th>
            <th class="col-category">
              <i class="fas fa-tag"></i> Kategória
            </th>
            <th class="col-streak">
              <i class="fas fa-fire"></i> Aktuálny Streak
            </th>
            <th class="col-action">
              <i class="fas fa-plus"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="habit in habits" :key="habit.id" class="table-row">
            <td class="col-habit">
              <div class="habit-name">
                <i :class="['fas', habit.icon]"></i>
                {{ habit.name }}
              </div>
            </td>
            <td class="col-category">
              <span class="category-badge" :style="{ backgroundColor: habit.categoryColor }">
                {{ habit.category }}
              </span>
            </td>
            <td class="col-streak">
              <span class="streak-number">{{ habit.streak }}</span>
            </td>
            <td class="col-action">
              <ProgressCheckbox :habitId="habit.id" @checked="handleCheckboxChange" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ProgressCheckbox from '../components/ProgressCheckbox.vue'

export default {
  name: 'Progress',
  components: { ProgressCheckbox },
  data() {
    return {
      habits: [
        {
          id: 1,
          name: 'Morning Meditation',
          category: 'Health',
          categoryColor: '#10b981',
          icon: 'fa-spa',
          streak: 12
        },
        {
          id: 2,
          name: 'Read for 30 Minutes',
          category: 'Learning',
          categoryColor: '#a855f7',
          icon: 'fa-book',
          streak: 5
        },
        {
          id: 3,
          name: 'Weekly Budget Review',
          category: 'Finance',
          categoryColor: '#f59e0b',
          icon: 'fa-calculator',
          streak: 3
        },
        {
          id: 4,
          name: 'Exercise',
          category: 'Fitness',
          categoryColor: '#3b82f6',
          icon: 'fa-dumbbell',
          streak: 8
        },
        {
          id: 5,
          name: 'Journal Writing',
          category: 'Personal Growth',
          categoryColor: '#ec4899',
          icon: 'fa-pen',
          streak: 15
        }
      ]
    }
  },
  methods: {
    handleCheckboxChange(data) {
      console.log(`Habit ${data.habitId} - Checked: ${data.checked}`)
      // Tu môžeš přidat logiku na uloženie do databázy
    }
  }
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
  color: #666;
  text-transform: none;
}

.progress-table tbody tr {
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.3s ease;
}

.progress-table tbody tr:hover {
  background-color: #f9f9f9;
}

.progress-table tbody tr:last-child {
  border-bottom: none;
}

.progress-table td {
  padding: 16px 20px;
  vertical-align: middle;
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
  color: white;
  font-size: 0.85rem;
  font-weight: 500;
}

.streak-number {
  font-size: 1.3rem;
  font-weight: 700;
  color: #008060;
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

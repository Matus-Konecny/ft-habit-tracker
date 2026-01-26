<template>
  <div class="habits-container">
    <div class="habits-header">
      <div>
        <h1>My habits</h1>
        <p class="subtitle">Manage and edit your habits</p>
      </div>
    </div>

    <div class="search-section">
      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search habits..." v-model="searchQuery">
      </div>
      <button class="new-habit-btn">
        <i class="fas fa-plus"></i>
        New habit
      </button>
    </div>

    <div class="habits-grid">
      <HabitCard 
        v-for="habit in filteredHabits" 
        :key="habit.id"
        :habit="habit"
      />
    </div>
  </div>
</template>

<script>
import HabitCard from '../components/HabitCard.vue'

export default {
  name: 'MyHabits',
  components: { HabitCard },
  data() {
    return {
      searchQuery: '',
      habits: [
        {
          id: 1,
          name: 'Reading',
          category: 'Education'
        },
        {
          id: 2,
          name: 'Meditation',
          category: 'Wellness',
        },
        {
          id: 3,
          name: 'Exercise',
          category: 'Fitness',
        },
        {
          id: 4,
          name: 'Writing a journal',
          category: 'Personal development',
        },
        {
          id: 5,
          name: 'Learning Spanish',
          category: 'Education',
        },
        {
          id: 6,
          name: 'Healthy diet',
          category: 'Health',
        }
      ]
    }
  },
  computed: {
    filteredHabits() {
      return this.habits.filter(habit =>
        habit.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
.habits-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 30px 40px;
  font-family: 'Nunito', sans-serif;
}

.habits-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
}

.habits-header h1 {
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

.search-section {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px 16px;
  flex: 1;
  max-width: 500px;
}

.search-bar i {
  color: #999;
  font-size: 1.1rem;
}

.search-bar input {
  border: none;
  outline: none;
  font-size: 0.95rem;
  font-family: 'Nunito', sans-serif;
  flex: 1;
  color: #333;
}

.search-bar input::placeholder {
  color: #aaa;
}

.new-habit-btn {
  background-color: #008060;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  font-family: 'Nunito', sans-serif;
  white-space: nowrap;
}

.new-habit-btn:hover {
  background-color: #006b52;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 128, 96, 0.3);
}

.new-habit-btn i {
  font-size: 1.1rem;
}

.habits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(252px, 1fr));
  gap: 30px;
}

@media (max-width: 768px) {
  .habits-container {
    padding: 90px 20px 40px;
  }

  .habits-header h1 {
    font-size: 1.8rem;
  }

  .search-section {
    flex-direction: column;
    align-items: stretch;
  }

  .search-bar {
    max-width: 100%;
  }

  .new-habit-btn {
    width: 100%;
    justify-content: center;
  }

  .habits-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
}
</style>

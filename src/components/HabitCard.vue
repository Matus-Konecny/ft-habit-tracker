<template>
  <div class="habit-card">
    <div class="habit-image"></div>
    
    <div class="habit-content">
      <h3 class="habit-title">{{ habit.name }}</h3>
      <p 
        class="habit-category" 
        :style="{ color: habitsStore.getCategoryColor(habit.category) }"
        >
        {{ habit.category }}
      </p>
    </div>
  </div>
</template>

<script>
import { useHabitsStore } from '../stores/habitsStore'

export default {
  name: 'HabitCard',
  props: {
    habit: {
      type: Object,
      required: true
    }
  },
  computed: {
    habitsStore() {
      return useHabitsStore()
    }
  }
}
</script>

<style scoped>
.habit-card {
  width: 252px;
  height: 265px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
}

.habit-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

.habit-image {
  width: 100%;
  height: 70%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: cover;
  background-position: center;
}

.habit-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 20%;
  justify-content: center;
}

.habit-title {
  font-size: 15px;
  font-weight: 600;
  color: #000;
  margin: 0;
  line-height: 1.3;
}

.habit-category {
  font-size: 13px;
  font-weight: 500;
  margin: 0;
}
</style>

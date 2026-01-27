import { defineStore } from 'pinia'

export const useHabitsStore = defineStore('habits', {
  state: () => ({
    habits: [
      { id: 1, name: 'Reading', category: 'Education', streak: 0, completedToday: false },
      { id: 2, name: 'Meditation', category: 'Wellness', streak: 0, completedToday: false },
      { id: 3, name: 'Exercise', category: 'Fitness', streak: 0, completedToday: false },
      { id: 4, name: 'Journaling', category: 'Personal Growth', streak: 0, completedToday: false },
      { id: 5, name: 'Learning Spanish', category: 'Education', streak: 0, completedToday: false },
      { id: 6, name: 'Healthy Diet', category: 'Health', streak: 0, completedToday: false }
    ]
  }),

  getters: {
    totalHabits: state => state.habits.length,
    completedTodayCount: state => state.habits.filter(h => h.completedToday).length,
    longestStreak: state => state.habits.reduce((max, h) => Math.max(max, h.streak), 0),
    
    getCategoryColor: (state) => (category) => {
      const colors = {
        'Education': '#FF6B6B',
        'Wellness': '#4ECDC4',
        'Fitness': '#FFD166',
        'Personal Growth': '#6A057F',
        'Health': '#1A936F'
      }
      return colors[category] || '#ccc'
    }
  },

  actions: {
    toggleHabitToday(id, completed) {
      const habit = this.habits.find(h => h.id === id)
      if (!habit) return
      habit.completedToday = completed
      if (completed) habit.streak += 1
    },
    resetTodayFlags() {
      this.habits.forEach(h => { h.completedToday = false })
    }
  }
})

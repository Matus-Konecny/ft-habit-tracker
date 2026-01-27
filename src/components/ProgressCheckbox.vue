<template>
  <div class="checkbox-wrapper">
    <input 
      type="checkbox" 
      :class="['check', { 'check-checked': isChecked }]"
      :id="`check-${habitId}`"
      @change="toggleCheckbox"
    >
    <label :for="`check-${habitId}`" class="label">
      <svg width="45" height="45" viewBox="0 0 95 95">
        <rect x="30" y="20" width="50" height="50" stroke="#008060" fill="none" stroke-width="2"></rect>
        <g transform="translate(0,-952.36222)">
          <path 
            d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" 
            stroke="#008060" 
            stroke-width="3" 
            fill="none" 
            class="path1"
          ></path>
        </g>
      </svg>
    </label>
  </div>
</template>

<script>
import {useHabitsStore} from '../stores/habitsStore'

export default {
  name: 'ProgressCheckbox',
  props: {
    habitId: { type: [String, Number], required: true }
  },

  computed: {
    habitsStore() {
      return useHabitsStore()
    },
    habit() {
      return this.habitsStore.habits.find(h => h.id === this.habitId)
    },
    isChecked: {
      get() {
        return this.habit ? this.habit.completedToday : false
      }
    }
  },

  methods: {
    toggleCheckbox(event) {
      const checked = event.target.checked
      this.habitsStore.toggleHabitToday(this.habitId, checked)
    }
  }
}
</script>

<style scoped>
.checkbox-wrapper input[type="checkbox"] {
  visibility: hidden;
  display: none;
}

.checkbox-wrapper *,
.checkbox-wrapper ::after,
.checkbox-wrapper ::before {
  box-sizing: border-box;
  user-select: none;
}

.checkbox-wrapper {
  position: relative;
  display: block;
  overflow: hidden;
}

.checkbox-wrapper .label {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox-wrapper .check {
  width: 50px;
  height: 50px;
  position: absolute;
  opacity: 0;
}

.checkbox-wrapper .label svg {
  vertical-align: middle;
  transition: all 0.3s ease;
}

.checkbox-wrapper .path1 {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: 0.5s stroke-dashoffset;
  opacity: 0;
}

.checkbox-wrapper .check:checked + label svg g path {
  stroke-dashoffset: 0;
  opacity: 1;
}

.checkbox-wrapper .check:checked + label svg rect {
  stroke: #008060;
  fill: rgba(0, 128, 96, 0.1);
}
</style>

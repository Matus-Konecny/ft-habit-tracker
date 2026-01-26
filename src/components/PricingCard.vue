<template>
  <div class="card">
    <div class="pricing-block-content">
      <p class="pricing-plan">{{ name }}</p>
      
      <div class="price-value">
        <p class="price-number">{{ price }}</p>
      </div>
      
      <div class="pricing-note">{{ note }}</div>
      
      <ul class="check-list" role="list">
        <li v-for="(feature, index) in features" :key="index">
          {{ feature }}
        </li>
      </ul>

      <button 
        v-if="name === 'Starter'" 
        class="btn btn-owned"
        disabled
      >
        <i class="fas fa-check"></i> Owned
      </button>
      <button 
        v-else
        class="btn btn-upgrade"
      >
        <i class="fas fa-arrow-up"></i> Upgrade
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingCard',
  props: {
    name: { type: String, required: true },
    price: { type: String, required: true },
    note: { type: String, default: '' },
    features: {
      type: Array,
      default() { return []; }
    }
  },
  methods: {
    handleUpgrade() {
      console.log(`Upgrading to ${this.name}`)
      // Tu môžeš pridať logiku pre upgrade
    }
  }
}
</script>

<style scoped>
.card {
  width: 190px;
  background: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
  border: 0.5vmin solid #000000;
  box-shadow: 0.4rem 0.4rem #000000;
  overflow: hidden;
  color: rgb(0, 0, 0);
  font-family: 'Nunito', sans-serif;
  transition: all 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0.6rem 0.6rem #000000;
}

.pricing-block-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 0.5rem;
}

.pricing-plan {
  color: #000000;
  font-size: 1.3rem;
  line-height: 1.25;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  font-family: 'Nunito', sans-serif;
}

.price-value {
  display: flex;
  color: #008060;
  font-size: 1.8rem;
  line-height: 1.25;
  font-weight: 700;
  margin: 0.5rem 0;
}

.price-number {
  margin: 0;
  font-family: 'Nunito', sans-serif;
}

.pricing-note {
  opacity: 0.8;
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  font-family: 'Nunito', sans-serif;
}

.check-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  list-style-type: disc;
  padding-left: 1.2rem;
  font-family: 'Nunito', sans-serif;
  flex-grow: 1;
}

.check-list li {
  margin: 0;
  font-size: 0.95rem;
  color: #333;
  font-family: 'Nunito', sans-serif;
}

.btn {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Nunito', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.btn-upgrade {
  background-color: #008060;
  color: white;
}

.btn-upgrade:hover {
  background-color: #006b52;
  transform: scale(1.05);
}

.btn-upgrade:active {
  transform: scale(0.98);
}

.btn-owned {
  background-color: #d3d3d3;
  color: #666;
  cursor: not-allowed;
}

.btn-owned:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn i {
  font-size: 1rem;
}
</style>

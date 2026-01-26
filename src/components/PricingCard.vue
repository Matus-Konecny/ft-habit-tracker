<template>
  <div class="card">
    <div class="pricing-block-content">
      <p class="pricing-plan">{{ name }}</p>
      
      <div class="price-value">
        <p class="price-number">{{ price }}</p>
      </div>
      
      <div class="pricing-note">{{ note }}</div>
      
      <!-- Bodkovaný zoznam namiesto checkmarkov -->
      <ul class="check-list" role="list">
        <li v-for="(feature, index) in features" :key="index">
          {{ feature }}
        </li>
      </ul>
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
  }
};
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
}

.price-value {
  display: flex;
  color: #000000;
  font-size: 1.8rem;
  line-height: 1.25;
  font-weight: 700;
}

.price-number {
  margin-right: 4px;
}

.pricing-note {
  opacity: 0.8;
}

.check-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  list-style-type: disc; 
  padding-left: 1.2rem;
}

.check-list li {
  margin: 0;
}
</style>

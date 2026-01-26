<template>
  <div class="pricing-container">
    <div class="cards-grid">
      <PricingCard
        name="Starter"
        price="$0 /mo"
        note="Free forever"
        :features="[
          '1 user account',
          'Basic analytics',
          '10 habits max',
          'Email support'
        ]"
      />
      <PricingCard
        name="Pro"
        price="$19 /mo"
        note="Best value"
        :features="[
          'Unlimited user accounts',
          'Advanced analytics',
          'Unlimited habits',
          'Custom reminders',
          'Priority support',
          'Export data'
        ]"
      />
      <PricingCard
        name="Enterprise"
        price="$99 /mo"
        note="For teams"
        :features="[
          'Unlimited everything',
          'Team collaboration',
          'API access',
          'Custom branding',
          'Dedicated manager',        
          ]"
      />
    </div>
  </div>
</template>

<script>
import PricingCard from '@/components/PricingCard.vue';

export default {
  name: 'PricingView',
  components: { PricingCard }
};
</script>

<style scoped>
.pricing-container {
  min-height: 80vh;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards-grid {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

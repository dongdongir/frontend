<template>
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton default-href="/"></IonBackButton>
        </IonButtons>
        <IonTitle>Expenses</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <!-- Summary Card -->
      <IonCard class="summary-card">
        <IonCardHeader>
          <IonCardTitle class="ion-text-center">Monthly Summary</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <div class="total-amount">
            <h1>$2,450.00</h1>
            <p>Total Expenses</p>
          </div>
        </IonCardContent>
      </IonCard>

      <!-- Categories Section -->
      <div class="categories-section">
        <h2 class="section-title">Categories</h2>
        <div class="category-grid">
          <IonCard class="category-card" color="primary">
            <IonCardContent class="ion-text-center">
              <ion-icon :icon="homeOutline" size="large"></ion-icon>
              <h3>Housing</h3>
              <p>$1,200</p>
            </IonCardContent>
          </IonCard>

          <IonCard class="category-card" color="secondary">
            <IonCardContent class="ion-text-center">
              <ion-icon :icon="carOutline" size="large"></ion-icon>
              <h3>Transport</h3>
              <p>$350</p>
            </IonCardContent>
          </IonCard>

          <IonCard class="category-card" color="tertiary">
            <IonCardContent class="ion-text-center">
              <ion-icon :icon="restaurantOutline" size="large"></ion-icon>
              <h3>Food</h3>
              <p>$450</p>
            </IonCardContent>
          </IonCard>

          <IonCard class="category-card" color="success">
            <IonCardContent class="ion-text-center">
              <ion-icon :icon="shirtOutline" size="large"></ion-icon>
              <h3>Shopping</h3>
              <p>$450</p>
            </IonCardContent>
          </IonCard>
        </div>
      </div>

      <!-- Add Expense Button -->
      <IonButton expand="block" class="add-expense-btn">
        <ion-icon :icon="addOutline" slot="start"></ion-icon>
        Add New Expense
      </IonButton>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
import { RouterLink } from "vue-router";
import { 
  homeOutline, 
  carOutline, 
  restaurantOutline, 
  shirtOutline,
  addOutline 
} from 'ionicons/icons';

</script>

<style scoped>
.summary-card {
  background: linear-gradient(135deg, #4CAF50, #2196F3);
  color: white;
  margin-bottom: 2rem;
}

.total-amount {
  text-align: center;
  padding: 1rem;
}

.total-amount h1 {
  font-size: 2.5rem;
  margin: 0;
}

.section-title {
  margin: 1.5rem 0;
  font-size: 1.2rem;
  color: var(--ion-color-medium);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-card {
  border-radius: 12px;
}

.category-card ion-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.category-card h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.add-expense-btn {
  margin-top: 2rem;
  --border-radius: 10px;
}
</style>

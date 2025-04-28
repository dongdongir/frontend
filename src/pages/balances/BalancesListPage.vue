<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/"></IonBackButton>
        </IonButtons>
        <IonTitle>Balance Details</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <IonList>
        <IonItem>
          <IonLabel>
            <h2>Current Balance</h2>
            <h1 class="balance-amount">${{ totalBalance }}</h1>
          </IonLabel>
        </IonItem>

        <IonItemDivider>
          <IonLabel>Recent Transactions</IonLabel>
        </IonItemDivider>

        <IonItem v-for="transaction in transactions" :key="transaction.id">
          <IonLabel>
            <h2>{{ transaction.description }}</h2>
            <p>{{ formatDate(transaction.date) }}</p>
          </IonLabel>
          <IonNote slot="end" :color="transaction.amount >= 0 ? 'success' : 'danger'">
            {{ transaction.amount >= 0 ? '+' : '' }}${{ transaction.amount }}
          </IonNote>
        </IonItem>
      </IonList>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton @click="openAddTransactionModal">
          <IonIcon :icon="addOutline"></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonItemDivider,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
import { RouterLink } from "vue-router";
import { addOutline } from 'ionicons/icons';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: Date;
}

const totalBalance = ref(1250.75);
const transactions = ref<Transaction[]>([
  {
    id: 1,
    description: "Salary Deposit",
    amount: 3000,
    date: new Date("2024-01-15")
  },
  {
    id: 2,
    description: "Rent Payment",
    amount: -1200,
    date: new Date("2024-01-10")
  },
  {
    id: 3,
    description: "Grocery Shopping",
    amount: -150.25,
    date: new Date("2024-01-08")
  }
]);

const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const openAddTransactionModal = () => {
  // Implementation for opening add transaction modal
  console.log("Opening add transaction modal");
};
</script>

<style scoped>
.balance-amount {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--ion-color-primary);
  margin: 1rem 0;
}
</style>

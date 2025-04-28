<template>
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton default-href="/"></IonBackButton>
        </IonButtons>
        <IonTitle>Expense Details</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Expense Information</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <form @submit.prevent="saveExpense">
            <IonItem>
              <IonLabel position="floating">Title</IonLabel>
              <IonInput v-model="expense.title" required></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Amount</IonLabel>
              <IonInput
                type="number"
                v-model="expense.amount"
                required
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Category</IonLabel>
              <IonSelect v-model="expense.category">
                <IonSelectOption value="food">Food</IonSelectOption>
                <IonSelectOption value="transport">Transport</IonSelectOption>
                <IonSelectOption value="entertainment"
                  >Entertainment</IonSelectOption
                >
                <IonSelectOption value="utilities">Utilities</IonSelectOption>
                <IonSelectOption value="other">Other</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Date</IonLabel>
              <IonInput type="date" v-model="expense.date" required></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Notes</IonLabel>
              <IonTextarea v-model="expense.notes" :rows="4"></IonTextarea>
            </IonItem>

            <div class="ion-padding">
              <IonButton expand="block" type="submit">Save Expense</IonButton>
              <IonButton
                expand="block"
                color="danger"
                @click="deleteExpense"
                class="ion-margin-top"
              >
                Delete Expense
              </IonButton>
            </div>
          </form>
        </IonCardContent>
      </IonCard>
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

interface Expense {
  title: string;
  amount: number;
  category: string;
  date: string;
  notes: string;
}

const expense = ref<Expense>({
  title: "",
  amount: 0,
  category: "other",
  date: new Date().toISOString().slice(0, 10),
  notes: "",
});

const saveExpense = () => {
  // TODO: Implement save functionality
  console.log("Saving expense:", expense.value);
};

const deleteExpense = () => {
  // TODO: Implement delete functionality
  console.log("Deleting expense");
};
</script>

<style scoped>
.ion-padding {
  padding: 16px;
}
</style>

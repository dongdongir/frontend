<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/balances"></IonBackButton>
        </IonButtons>
        <IonTitle>Balance Details</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Account Information</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonItem>
            <IonLabel position="stacked">Account Name</IonLabel>
            <IonInput v-model="accountName" type="text" placeholder="Enter account name"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Balance Amount</IonLabel>
            <IonInput v-model="balance" type="number" placeholder="Enter balance"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Currency</IonLabel>
            <IonSelect v-model="currency" placeholder="Select currency">
              <IonSelectOption value="IRT">IRT</IonSelectOption>
              <IonSelectOption value="EUR">EUR</IonSelectOption>
              <IonSelectOption value="GBP">GBP</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Description</IonLabel>
            <IonTextarea v-model="description" placeholder="Enter description"></IonTextarea>
          </IonItem>
        </IonCardContent>
      </IonCard>

      <div class="ion-padding">
        <IonButton expand="block" @click="saveBalance">Save Balance</IonButton>
      </div>
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

const accountName = ref("");
const balance = ref(0);
const currency = ref("USD");
const description = ref("");

const saveBalance = () => {
  // TODO: Implement save functionality
  console.log({
    accountName: accountName.value,
    balance: balance.value,
    currency: currency.value,
    description: description.value,
  });
};
</script>

<style scoped>
.ion-padding {
  margin-top: 1rem;
}
</style>

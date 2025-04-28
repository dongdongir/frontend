<template>
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton default-href="/"></IonBackButton>
        </IonButtons>
        <IonTitle>Users List</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>User Management</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <!-- Search Bar -->
          <IonItem>
            <IonLabel position="floating">Search Users</IonLabel>
            <IonInput v-model="searchQuery" placeholder="Enter name or email"></IonInput>
          </IonItem>

          <!-- User List -->
          <div class="user-list">
            <IonItem v-for="user in users" :key="user.id" class="user-item">
              <IonLabel>
                <h2>{{ user.name }}</h2>
                <p>{{ user.email }}</p>
              </IonLabel>
              <IonButton slot="end" fill="clear" :router-link="`/users/${user.id}`">
                View Details
              </IonButton>
            </IonItem>
          </div>
        </IonCardContent>
      </IonCard>

      <!-- Add User FAB Button -->
      <IonButton 
        class="add-user-btn" 
        expand="block"
        router-link="/users/new"
      >
        <ion-icon :icon="addOutline" slot="start"></ion-icon>
        Add New User
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
  addOutline,
} from "ionicons/icons";

// Reactive references
const searchQuery = ref("");
const users = ref([
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com" },
]);
</script>

<style scoped>
.user-list {
  margin-top: 1rem;
}

.user-item {
  margin-bottom: 0.5rem;
  border-radius: 8px;
}

.add-user-btn {
  margin: 1rem;
}
</style>

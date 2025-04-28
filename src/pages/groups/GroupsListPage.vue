<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle class="ion-text-center">Groups List</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <!-- Search Bar -->
      <IonSearchbar
        placeholder="Search groups..."
        animated
        @ionChange="handleSearch($event)"
      ></IonSearchbar>

      <!-- Groups List -->
      <IonList>
        <IonItem
          v-for="group in groups"
          :key="group.id"
          class="ion-margin-vertical"
        >
          <IonLabel>
            <h2>{{ group.name }}</h2>
            <p>{{ group.memberCount }} members</p>
          </IonLabel>
          <IonButton slot="end" fill="solid" color="primary">
            Join Group
          </IonButton>
        </IonItem>
      </IonList>

      <!-- Create New Group Button -->
      <IonButton expand="block" class="ion-margin-top">
        Create New Group
      </IonButton>

      <!-- No Results Message -->
      <div class="ion-text-center ion-padding" v-if="groups.length === 0">
        <IonText color="medium">
          <p>No groups found</p>
        </IonText>
      </div>
    </IonContent>

    <!-- Floating Action Button -->
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton>
        <IonIcon :icon="add"></IonIcon>
      </IonFabButton>
    </IonFab>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/vue";
import { add } from "ionicons/icons";
import { ref } from "vue";

// Sample data - replace with actual data source
const groups = ref([
  { id: 1, name: "Group 1", memberCount: 10 },
  { id: 2, name: "Group 2", memberCount: 15 },
  { id: 3, name: "Group 3", memberCount: 8 },
]);

const handleSearch = (event: CustomEvent) => {
  const query = event.detail.value;
  // Implement search logic here
  console.log("Searching for:", query);
};
</script>

<style scoped>
ion-item {
  margin-bottom: 8px;
  border-radius: 8px;
}
</style>

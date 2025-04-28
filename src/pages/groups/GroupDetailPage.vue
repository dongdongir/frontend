<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Group Details</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonSearchbar
        v-model="searchText"
        placeholder="Search members..."
        @ionInput="handleSearch"
      ></IonSearchbar>

      <IonList>
        <IonItem v-for="member in filteredMembers" :key="member.id">
          <IonLabel>
            <h2>{{ member.name }}</h2>
            <p>{{ member.role }}</p>
          </IonLabel>
          <IonButton slot="end" fill="clear" @click="manageMember(member)">
            Manage
          </IonButton>
        </IonItem>
      </IonList>

      <IonText v-if="filteredMembers.length === 0" class="ion-text-center">
        <p>No members found</p>
      </IonText>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton @click="addNewMember">
          <IonIcon :icon="add"></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonContent>
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
import { computed, ref } from "vue";
import { add } from 'ionicons/icons';

interface Member {
  id: number;
  name: string;
  role: string;
}

const searchText = ref('');
const members = ref<Member[]>([
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'Member' },
  // Add more members as needed
]);

const filteredMembers = computed(() => {
  return members.value.filter(member => 
    member.name.toLowerCase().includes(searchText.value.toLowerCase())
  );
});

const handleSearch = (event: CustomEvent) => {
  searchText.value = event.detail.value;
};

const manageMember = (member: Member) => {
  // Implement member management logic
  console.log('Managing member:', member);
};

const addNewMember = () => {
  // Implement add new member logic
  console.log('Adding new member');
};
</script>

<style>
.ion-text-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>

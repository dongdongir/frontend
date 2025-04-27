<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>گروه ها</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">دوستان</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonFab slot="fixed" vertical="bottom" horizontal="end" class="m-4">
        <IonFabButton router-link="/tabs/groups/create">
          <Icon icon="tabler:plus" height="24" />
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
  IonFab,
  IonFabButton,
} from "@ionic/vue";
import { Icon } from "@iconify/vue";
</script>

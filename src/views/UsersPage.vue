<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <Draggable v-model="userStore.users" v-bind="dragOptions">
          <template #item="{ element }">
            <ion-item :key="element.id">
              <ion-icon
                color="danger"
                class="handle"
                slot="start"
                :icon="list"
                size="large"
              ></ion-icon>
              <ion-label>{{ element.name }}</ion-label>
              <ion-button type="primary">
                <!-- <ion-icon class="handle" :icon="list"></ion-icon> -->
                <!-- <ion-ripple-effect></ion-ripple-effect> -->
              </ion-button>
            </ion-item>
          </template>
        </Draggable>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonNote,
} from "@ionic/vue";

import { useUserStore } from "@/stores/user.store";
import { list } from "ionicons/icons";
import { computed } from "vue";
import Draggable from "vuedraggable";

const userStore = useUserStore();

const dragOptions = computed(() => {
  return {
    animation: 400,
    itemKey: "order",
  };
});
</script>

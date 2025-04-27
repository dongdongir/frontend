<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet />
      <IonTabBar slot="bottom" class="py-2">
        <IonTabButton tab="groups" href="/tabs/groups">
          <Icon icon="material-symbols:groups" width="32" height="32" />
          <IonLabel>گروه ها</IonLabel>
        </IonTabButton>

        <IonTabButton tab="friends" href="/tabs/friends">
          <Icon icon="game-icons:three-friends" width="32" height="32" />
          <IonLabel>دوستان</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { Icon } from "@iconify/vue";
</script>

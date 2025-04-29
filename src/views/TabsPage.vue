<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet />
      <IonTabBar slot="bottom">
        <!-- <IonTabButton tab="balances" href="/tabs/balances">
          <IonIcon :icon="walletOutline" />
          <IonLabel>Balances</IonLabel>
        </IonTabButton> -->

        <!-- <IonTabButton tab="expenses" href="/tabs/expenses">
          <IonIcon :icon="cashOutline" />
          <IonLabel>Expenses</IonLabel>
        </IonTabButton> -->

        <IonTabButton tab="groups" href="/tabs/groups">
          <IonIcon :icon="peopleOutline" />
          <IonLabel>Groups</IonLabel>
        </IonTabButton>

        <!-- <IonTabButton tab="users" href="/tabs/users">
          <IonIcon :icon="personOutline" />
          <IonLabel>Users</IonLabel>
        </IonTabButton> -->

        <!-- <IonTabButton tab="friends" href="/tabs/friends">
          <IonIcon :icon="heartOutline" />
          <IonLabel>Friends</IonLabel>
        </IonTabButton> -->
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  walletOutline,
  cashOutline,
  peopleOutline,
  personOutline,
  heartOutline,
} from "ionicons/icons";
</script>

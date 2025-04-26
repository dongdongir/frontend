<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Login</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <IonImg src="/auth.webp" class="auth-logo" />

      <IonList>
        <IonItem>
          <IonInput
            label="Username"
            label-placement="floating"
            placeholder="Enter your username"
          />
        </IonItem>

        <IonItem>
          <IonInput
            label="Password"
            label-placement="floating"
            placeholder="Enter your password"
            type="password"
          />
        </IonItem>

        <IonItem>
          <IonButton> Login </IonButton>
          <IonButton> Register </IonButton>
        </IonItem>
      </IonList>
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
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonImg,
} from "@ionic/vue";
</script>
<style lang="scss">
.auth-logo {
  width: 70%;
  margin-inline: auto;
  margin-block: 48px;
}
</style>

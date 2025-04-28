<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Register</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <form @submit.prevent="handleRegister" class="ion-padding">
        <IonItem>
          <IonInput
            label="Username"
            label-placement="floating"
            v-model="username"
            type="text"
            required
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonInput
            label="Email"
            label-placement="floating"
            v-model="email"
            type="email"
            required
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonInput
            label="Password"
            label-placement="floating"
            v-model="password"
            type="password"
            required
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonInput
            label="Confirm Password"
            label-placement="floating"
            v-model="confirmPassword"
            type="password"
            required
          ></IonInput>
        </IonItem>

        <IonButton type="submit" expand="block" class="ion-margin-top">
          Register
        </IonButton>

        <div class="ion-text-center ion-margin-top">
          Already have an account?
          <RouterLink to="/auth/login">Login here</RouterLink>
        </div>
      </form>
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
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { RouterLink } from "vue-router";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleRegister = () => {
  // Add registration logic here
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }

  console.log({
    username: username.value,
    email: email.value,
    password: password.value,
  });
};
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
}
</style>

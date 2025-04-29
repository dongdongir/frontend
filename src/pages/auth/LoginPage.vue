<template>
  <IonPage>
    <IonContent class="ion-padding">
      <div class="login-container">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle class="ion-text-center">Welcome Back!</IonCardTitle>
            <IonCardSubtitle class="ion-text-center"
              >Sign in to continue</IonCardSubtitle
            >
          </IonCardHeader>

          <IonCardContent>
            <form @submit.prevent="handleLogin">
              <IonItem>
                <IonInput
                  v-model="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  label="Email"
                  label-placement="floating"
                ></IonInput>
              </IonItem>

              <IonItem class="ion-margin-top">
                <IonInput
                  v-model="password"
                  type="password"
                  required
                  placeholder="Enter your password"
                  label="Password"
                  label-placement="floating"
                ></IonInput>
              </IonItem>

              <IonButton
                expand="block"
                class="ion-margin-top"
                type="submit"
                :disabled="isLoading"
              >
                {{ isLoading ? "Signing in..." : "Sign In" }}
              </IonButton>

              <div class="ion-text-center ion-margin-top">
                <IonText color="medium">
                  <p>
                    Don't have an account?
                    <RouterLink to="/auth/register">Sign Up</RouterLink>
                  </p>
                </IonText>
              </div>
            </form>
          </IonCardContent>
        </IonCard>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/vue";
import { RouterLink } from "vue-router";

import { onMounted } from "vue";

onMounted(() => {
  console.log("Page Mounted Successfully");
});

const email = ref("");
const password = ref("");
const isLoading = ref(false);

const handleLogin = async () => {
  try {
    isLoading.value = true;
    // Add your login logic here
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated API call
    console.log("Login attempt with:", {
      email: email.value,
      password: password.value,
    });
  } catch (error) {
    console.error("Login failed:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.login-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

ion-card {
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

ion-card-header {
  padding-top: 30px;
}

ion-button {
  margin-top: 20px;
}

ion-item {
  --padding-start: 0;
  --border-color: var(--ion-color-medium);
}
</style>

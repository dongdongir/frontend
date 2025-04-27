<template>
  <div>
    <IonHeader class="ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/group-list" />
        </IonButtons>
        <IonTitle>مدیریت گروه</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <div class="flex flex-col items-center justify-center">
        <IonImg
          src="https://lh5.googleusercontent.com/proxy/SUATB3vX1wndrtRXTyuKFWaMvzRgNm0dDX0iHHM5MFJNVEx6f-pYZTQ5qAVoA0HZcLqmwUKXYD2MWKVDND_ALNhNVjh2_dUgM8ozCNcf8aM6wA"
          class="mb-8"
          alt="Avatar"
        />
        <h2 class="text-lg font-bold mb-4">گروه ۱</h2>
        <p class="text-sm text-gray-500 mb-4">توضیحات گروه ۱</p>
      </div>

      <div class="flex justify-around">
        <!-- <IonButton color="primary" @click="confirm"> افزودن </IonButton>
        <IonButton color="medium" @click="cancel"> انصراف </IonButton> -->
      </div>
    </IonContent>
  </div>
</template>
<script setup lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/vue";
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>گروه ها</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense" class="mb-4">
        <IonToolbar>
          <IonTitle size="large">گروه ها</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonList class="mb-8">
        <IonListHeader>لیست گروه ها</IonListHeader>
        <template v-for="group in groupStore.groupList" :key="group.id">
          <IonItem :router-link="`/tabs/groups/${group.id}`">
            {{ group.name }}
          </IonItem>
        </template>
      </IonList>

      <IonModal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
        <IonHeader>
          <IonToolbar>
            <IonTitle>مدیریت گروه</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          <IonImg
            src="https://lh5.googleusercontent.com/proxy/SUATB3vX1wndrtRXTyuKFWaMvzRgNm0dDX0iHHM5MFJNVEx6f-pYZTQ5qAVoA0HZcLqmwUKXYD2MWKVDND_ALNhNVjh2_dUgM8ozCNcf8aM6wA"
            class="mb-8"
            alt="Avatar"
          />
          <IonItem>
            <IonInput
              ref="input"
              type="text"
              placeholder="نام گروه جدید"
              class="mb-4"
              label="نام گروه جدید"
              label-placement="floating"
            />
          </IonItem>
          <IonItem>
            <IonSelect
              ref="input"
              placeholder="انتخاب تصویر گروه"
              class="mb-4"
              label="انتخاب تصویر گروه"
              label-placement="floating"
            >
              <IonSelectOption value="image1">تصویر ۱</IonSelectOption>
              <IonSelectOption value="image2">تصویر ۲</IonSelectOption>
              <IonSelectOption value="image3">تصویر ۳</IonSelectOption>
              <IonSelectOption value="image4">تصویر ۴</IonSelectOption>
              <IonSelectOption value="image5">تصویر ۵</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonInput
              ref="input"
              type="text"
              placeholder="نام گروه جدید"
              class="mb-4"
              label="نام گروه جدید"
              label-placement="floating"
            />
          </IonItem>
        </IonContent>
        <IonFooter>
          <IonToolbar class="py-2">
            <div class="flex justify-around">
              <IonButton color="primary" @click="confirm"> افزودن </IonButton>
              <IonButton color="medium" @click="cancel"> انصراف </IonButton>
            </div>
          </IonToolbar>
        </IonFooter>
      </IonModal>

      <IonFab slot="fixed" vertical="bottom" horizontal="end" class="m-4">
        <IonFabButton id="open-modal">
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
  IonList,
  IonListHeader,
  IonItem,
  IonButton,
  IonModal,
  IonInput,
  IonImg,
  IonSelect,
  IonSelectOption,
  IonFooter,
} from "@ionic/vue";
import { Icon } from "@iconify/vue";
import { OverlayEventDetail } from "@ionic/core/components";
import { ref } from "vue";
import { useGroupStore } from "@/stores/group.store";

const groupStore = useGroupStore();

const message = ref(
  "This modal example uses triggers to automatically open a modal when the button is clicked."
);

const modal = ref();
const input = ref();

const cancel = () => {
  modal.value.$el.dismiss(null, "cancel");
};

const confirm = () => {
  const name = input.value.$el.value;
  modal.value.$el.dismiss(name, "confirm");
};

const onWillDismiss = (event: CustomEvent<OverlayEventDetail>) => {
  if (event.detail.role === "confirm") {
    message.value = `Hello, ${event.detail.data}!`;
  }
};
</script>

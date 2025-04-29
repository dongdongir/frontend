<template>
  <IonHeader>
    <IonToolbar class="px-4">لیست گروه ها</IonToolbar>
  </IonHeader>
  <IonContent>
    <IonCard
      v-for="group in groupStore.groupList"
      :key="group.id"
      class="flex items-start gap-4 p-4"
      :router-link="`/tabs/groups/${group.id}`"
    >
      <IonAvatar>
        <img
          alt="Silhouette of a person's head"
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
        />
      </IonAvatar>
      <div class="grid">
        <IonCardTitle>{{ group.name }}</IonCardTitle>
        <IonCardContent class="ps-0">تسویه شدی</IonCardContent>
      </div>
    </IonCard>

    <IonModal :isOpen="isOpen">
      <IonHeader>
        <IonToolbar>ساخت اکیپ</IonToolbar>
      </IonHeader>
      <IonContent>
        <IonAvatar class="w-32 h-32 mx-auto my-12">
          <IonImg
            alt="Silhouette of a person's head"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
          />
          <IonButton shape="round" class="">
            <Icon
              icon="mdi:image-add"
              width="1.4em"
              height="1.4em"
              class="text-light"
            />
          </IonButton>
        </IonAvatar>

        <IonItem class="px-4">
          <IonInput
            type="text"
            placeholder="نام اکیپ"
            class=""
            v-model="group.name"
            label="نام اکیپ"
            labelPlacement="floating"
            labelMode="floating"
          />
        </IonItem>
        <div class="flex my-12 px-4 gap-4">
          <IonButton expand="full" class="flex-1" @click="closeModal">
            ساخت اکیپ
          </IonButton>
          <IonButton
            fill="clear"
            expand="full"
            class="flex-1"
            @click="closeModal"
          >
            انصراف
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
    <IonFab vertical="bottom" horizontal="end" slot="fixed" class="me-2 mb-16">
      <IonFabButton @click="openModal">
        <Icon icon="tabler:plus" width="28" />
      </IonFabButton>
    </IonFab>
  </IonContent>
</template>
<script setup lang="ts">
import {
  IonContent,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonAvatar,
  IonFab,
  IonFabButton,
  IonModal,
  IonHeader,
  IonToolbar,
  IonImg,
  IonButton,
  IonItem,
  IonInput,
} from "@ionic/vue";
import { Icon } from "@iconify/vue";
import { useGroupStore } from "@/stores/group.store";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { GroupEntity } from "@/interfaces/group.interface";
const groupStore = useGroupStore();
const router = useRouter();
const group = ref<GroupEntity>({} as GroupEntity);
const isOpen = ref<boolean>(false);

const openModal = () => {
  isOpen.value = true;
};
const closeModal = () => {
  isOpen.value = false;
};
</script>

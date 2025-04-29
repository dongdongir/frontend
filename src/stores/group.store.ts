import { ref } from "vue";
import { defineStore } from "pinia";
import { GroupEntity } from "@/interfaces/group.interface";

export const useGroupStore = defineStore("dongdong group", () => {
  const group = ref<GroupEntity>({} as GroupEntity);
  const groupList = ref<GroupEntity[]>([
    {
      id: "1",
      name: "تهران",
      description: "پایتخت ایران",
      createdById: "user1",
      membersId: ["member1", "member2"],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      name: "مشهد",
      description: "شهر زیارتی",
      createdById: "user2",
      membersId: ["member3", "member4"],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3",
      name: "اصفهان",
      description: "نصف جهان",
      createdById: "user3",
      membersId: ["member5", "member6"],
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "4",
      name: "شیراز",
      description: "شهر شعر و ادب",
      createdById: "user4",
      membersId: ["member7", "member8"],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "5",
      name: "تبریز",
      description: "شهر اولین ها",
      createdById: "user5",
      membersId: ["member9", "member10"],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "6",
      name: "یزد",
      description: "شهر بادگیرها",
      createdById: "user6",
      membersId: ["member11", "member12"],
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "7",
      name: "رشت",
      description: "شهر باران",
      createdById: "user7",
      membersId: ["member13", "member14"],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "8",
      name: "کرمان",
      description: "دیار کریمان",
      createdById: "user8",
      membersId: ["member15", "member16"],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "9",
      name: "همدان",
      description: "شهر کوهستانی",
      createdById: "user9",
      membersId: ["member17", "member18"],
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "10",
      name: "قم",
      description: "شهر مذهبی",
      createdById: "user10",
      membersId: ["member19", "member20"],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "11",
      name: "اهواز",
      description: "شهر نفت",
      createdById: "user11",
      membersId: ["member21", "member22"],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "12",
      name: "کرمانشاه",
      description: "شهر پهلوانان",
      createdById: "user12",
      membersId: ["member23", "member24"],
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);

  const getGroupById = (id: GroupEntity["id"]) => {
    group.value =
      groupList.value.find((group) => group.id === id) ?? ({} as GroupEntity);
  };
  const getGroupByName = (name: GroupEntity["name"]) => {
    return groupList.value.find((group) => group.name === name);
  };
  const addGroup = (newGroup: GroupEntity) => {
    const groupExists = groupList.value.some(
      (group) => group.id === newGroup.id
    );
    if (!groupExists) {
      groupList.value.push(newGroup);
    } else {
      const index = groupList.value.findIndex(
        (group) => group.id === newGroup.id
      );
      if (index !== -1) {
        groupList.value[index] = newGroup;
      }
    }
  };
  const removeGroup = (id: GroupEntity["id"]) => {
    const index = groupList.value.findIndex((group) => group.id === id);
    if (index !== -1) {
      groupList.value.splice(index, 1);
    }
  };

  return {
    group,
    groupList,
    removeGroup,
    addGroup,
    getGroupById,
    getGroupByName,
  };
});

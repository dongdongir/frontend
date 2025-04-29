import { ref } from "vue";
import { defineStore } from "pinia";
import { GroupEntity } from "@/interfaces/group.interface";

export const useGroupStore = defineStore("dongdong group", () => {
  const group = ref<GroupEntity>({} as GroupEntity);
  const groupList = ref<GroupEntity[]>([
    {
      id: "asdasd",
      name: "شمال",
      description: "شمال شهریور ",
      createdById: "",
      membersId: [],
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
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

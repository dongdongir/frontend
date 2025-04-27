import { ref } from "vue";
import { defineStore } from "pinia";

interface Group {
  id: string;
  name: string;
  members: string[];
}
export const useGroupStore = defineStore("dongdong group", () => {
  const group = ref<Group>({} as Group);
  const groupList = ref<Group[]>([
    {
      id: "1",
      name: "Group 1",
      members: ["Member 1", "Member 2"],
    },
    {
      id: "2",
      name: "Group 2",
      members: ["Member 3", "Member 4"],
    },
    {
      id: "3",
      name: "Group 3",
      members: ["Member 5", "Member 6"],
    },
    {
      id: "4",
      name: "Group 4",
      members: ["Member 7", "Member 8"],
    },
    {
      id: "5",
      name: "Group 5",
      members: ["Member 9", "Member 10"],
    },
    {
      id: "6",
      name: "Group 6",
      members: ["Member 11", "Member 12"],
    },
    {
      id: "7",
      name: "Group 7",
      members: ["Member 13", "Member 14"],
    },
    {
      id: "8",
      name: "Group 8",
      members: ["Member 15", "Member 16"],
    },
    {
      id: "9",
      name: "Group 9",
      members: ["Member 17", "Member 18"],
    },
    {
      id: "10",
      name: "Group 10",
      members: ["Member 19", "Member 20"],
    },
  ]);

  return { group, groupList };
});

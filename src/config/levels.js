
import begginerStamp from "@/assets/images/beginner_stamp.jpg";
import adventureStamp from "@/assets/images/adventure_stamp.jpg";
import explorerStamp from "@/assets/images/explorer_stamp.jpg";
import expertStamp from "@/assets/images/expert_stamp.jpg";
import masterStamp from "@/assets/images/master_stamp.jpg";
import vipStamp from "@/assets/images/vip_stamp.jpg";

const StampsImage = {
  Begginer: begginerStamp,
  Adventure: adventureStamp,
  Explorer: explorerStamp,
  Expert: expertStamp,
  Master: masterStamp,
  Vip: vipStamp,
};

export const Levels = [
  {
    id: "beginner",
    name: "Beginner",
    score: 0,
    image: StampsImage.Begginer,
  },
  {
    id: "adveture",
    name: "Adventure",
    score: 20000,
    image: StampsImage.Adventure,
  },
  {
    id: "explorer",
    name: "Explorer",
    score: 40000,
    image: StampsImage.Explorer,
  },
  {
    id: "expert",
    name: "Expert",
    score: 60000,
    image: StampsImage.Expert,
  },
  {
    id: "master",
    name: "Master",
    score: 80000,
    image: StampsImage.Master,
  },
  {
    id: "vip",
    name: "Vip",
    score: 100000,
    image: StampsImage.Vip,
  },
]
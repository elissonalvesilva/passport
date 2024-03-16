import { Levels } from "@/config/levels";

export const toCapitalize = (string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export const buildUserAcquiredLevels = (userLevel) => {
  const userLevels = Levels.map((level) => level.id);
  const userAcquiredLevels = userLevels.slice(0, userLevels.indexOf(userLevel) + 1);
  return userAcquiredLevels;
}

export const getNextUserLevel = (userLevel) => {
  const userLevels = Levels.map((level) => level.id);
  const nextUserLevel = userLevels[userLevels.indexOf(userLevel) + 1];
  return Levels.find((level) => level.id === nextUserLevel);
}
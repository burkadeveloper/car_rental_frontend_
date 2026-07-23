<<<<<<< HEAD
import { format, parseISO } from "date-fns";

export const formatDate = (date) => {
  if (!date) return "";
  return format(parseISO(date), "MMM dd, yyyy");
};

export const formatDateTime = (date) => {
  if (!date) return "";
  return format(parseISO(date), "MMM dd, yyyy HH:mm");
};
=======
import { format, parseISO } from "date-fns";

export const formatDate = (date) => {
  if (!date) return "";
  return format(parseISO(date), "MMM dd, yyyy");
};

export const formatDateTime = (date) => {
  if (!date) return "";
  return format(parseISO(date), "MMM dd, yyyy HH:mm");
};
>>>>>>> e32ece4e9c0f3570c3b3d9af4dbf9fb821cfd845

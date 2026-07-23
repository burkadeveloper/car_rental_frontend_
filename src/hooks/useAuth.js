<<<<<<< HEAD
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user, isLoading, error } = useSelector((state) => state.auth);
  return { user, isLoading, error, isAuthenticated: !!user };
};
=======
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user, isLoading, error } = useSelector((state) => state.auth);
  return { user, isLoading, error, isAuthenticated: !!user };
};
>>>>>>> e32ece4e9c0f3570c3b3d9af4dbf9fb821cfd845

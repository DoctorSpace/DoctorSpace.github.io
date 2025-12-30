import { useSelector } from "react-redux";

export function useAuth() {
  const { token, email } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    token,
  };
}

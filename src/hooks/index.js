import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { login as userLogin } from "../api";
import { setItemInLocalSorage,LOCALSTORAGE_TOKEN_KEY, removeItemFromLocalSorage } from "../utils";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const response = await userLogin(email, password);
    if (response.success) {
      setUser(response.data.user);
      setItemInLocalSorage(LOCALSTORAGE_TOKEN_KEY, 
        response.data.user ? response.data.user:null);
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };

  const logout = () => {
    setUser(null);
    removeItemFromLocalSorage(LOCALSTORAGE_TOKEN_KEY);
  };

  return {
    user,
    login,
    logout,
    loading,
  };
};

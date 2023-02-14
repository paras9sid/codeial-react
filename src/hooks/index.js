import { useState } from "react";

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {};

  const logout = () => {};

  return {
    user,
    login,
    logout,
    loading,
  };
};

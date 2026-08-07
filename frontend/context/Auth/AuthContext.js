"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getMeRequest, logoutRequest } from "@/Services/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function loadUser() {
    try {
      const data = await getMeRequest();
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    try {
      await logoutRequest();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
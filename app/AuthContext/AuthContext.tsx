"use client";
import axios from "axios";
import React, { useState, createContext, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface User {
  firstName: string;

  // Add other properties that your user object has
}

interface LoginType {
  password: string;
  userName: string;
}

type LoginFunction = (username: string, password: string) => void;
type LogoutFunction = () => void;

interface AuthContextType {
  state: string | object | undefined;
  setState: React.Dispatch<React.SetStateAction<string | undefined>>;
  login: LoginFunction;
  logout: LogoutFunction;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<string | object | undefined>(undefined);
  const router = useRouter();

  const login: LoginFunction = async (username: string, password: string) => {
    const formData: LoginType = { userName: username, password: password };
    console.log("Logging in...");
    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        formData
      );
      if (response.status === 200) {
        console.log("Logging in with:", formData.userName, formData.password);
        console.log(response.data.user);
        alert("logged in successfully");
        const user = response.data.user;
        setState(user);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/Home");
      }
    } catch (err) {
      alert("wrong username or password");
      console.log("Logging in with:", formData.userName, formData.password);
    }
  };

  const logout: LogoutFunction = () => {
    setState(undefined);
    sessionStorage.removeItem("user");
    router.push("/Login");
  };

  return (
    <AuthContext.Provider value={{ state, setState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

// export default AuthProvider;

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/app/AuthContext/AuthContext";
import { useRouter } from "next/navigation";

type User = {
  firstName: string;
  // Add other properties that your user object has
};

function HelloPage() {
  // const context: any = useContext(AuthContext);
  const router = useRouter();

  const { state, setState, logout } = useAuth();

  useEffect(() => {
    const fetchData = () => {
      const loginData: any = sessionStorage.getItem("user");
      const user = JSON.parse(loginData);
      console.log(user);
      if (!user) {
        console.log("There is no user");
        router.push("/Login");
      } else {
        setState(user);
      }
    };
    fetchData();
  }, []);

  const signout = () => {
    logout();
  };

  if (!state || typeof state !== "object") {
    return <div>Loading...</div>;
  }

  const user = state as {
    firstName?: string;
    lastName?: string;
    email?: string;
  };

  return (
    <div className="flex items-center justify-between dark:text-white">
      <p>Hello: {`${user.firstName} ${user.lastName}`}</p>
      <button
        onClick={signout}
        type="button"
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
      >
        Logout
      </button>
    </div>
  );
}

export default HelloPage;

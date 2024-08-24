"use client";
import { useEffect } from "react";
import Head from "next/head";
import NavBar from "../../components/HomeComponents/NavBar/NavigationBar/NavBar";
import ImagePost from "@/app/components/Posts/Images/ImagePost";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/AuthContext/AuthContext";
import Image from "next/image";

export default function Home() {
  const { state, setState, logout } = useAuth();
  const router = useRouter();

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
    // for testing purposes remove after complete and "use Higher Order Component"
    return <div className="">Loading...</div>;
  }

  const user = state as {
    firstName?: string;
    lastName?: string;
    email?: string;
  };

  return (
    <div className="b">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Your page description" />
      </Head>

      <NavBar signout={signout} user={user} />

      <div className="w-full relative top-7 flex justify-center items-center flex-col  ">
        <ImagePost user={user} />
      </div>

      {/* <div className="outer flex justify-center items-center absolute top-11 left-20 w-96 h-96 bg-slate-700">
        <div className="inner relative h-52 w-52 bg-red-500">
          <Image
            alt="Test Photo"
            src="https://images.pexels.com/photos/26893039/pexels-photo-26893039/free-photo-of-portrait-of-a-macaque-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            layout="fill" // Ensure the image fills the container
            objectFit="cover" // Maintain aspect ratio while filling the container
          />
        </div>  
      </div> */}
    </div>
  );
}

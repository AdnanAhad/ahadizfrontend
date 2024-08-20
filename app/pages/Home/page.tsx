import Head from "next/head";
import HelloPage from "../../components/HomeComponents/HelloPage/HelloPage";
import NavBar from "../../components/HomeComponents/NavBar/NavigationBar/NavBar";
import ImageList from "@/app/components/Posts/Images/ImageList";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Your page description" />
      </Head>

      <NavBar />

      <div className="w-full relative top-7 flex justify-center items-center flex-col border border-blue-500 ">
        <ImageList />
        <ImageList />
      </div>
    </div>
  );
}

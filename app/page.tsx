import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import AuthProvider from "./AuthContext/AuthContext";
import Home from "./pages/Home/page";

export default function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

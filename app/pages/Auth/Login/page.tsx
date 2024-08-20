"use client";
import { useState, useContext } from "react";
import InputBox from "@/app/components/InputBox/page";
import { Button, Card, CardContent, Link } from "@mui/material";
import { VerifiedSharp, LockSharp } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/app/AuthContext/AuthContext";

function Login() {
  const { login, setState } = useAuth();

  const router = useRouter();
  const initialFormData = {
    userName: "",
    password: "",
  };
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleCreateAccount = () => {
    router.push("/Register");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userName || !formData.password) {
      setError("Please Enter Username and Password correctly.");
    } else {
      setError("");
      login(formData.userName, formData.password);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
      <Card sx={{ minWidth: 500, gap: 5 }}>
        <CardContent className="flex flex-col items-center justify-center ">
          <h1>Login</h1>

          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center justify-center "
          >
            <InputBox
              icon={VerifiedSharp}
              label="Username"
              required
              name="userName"
              onChange={handleChange}
              value={formData.userName}
            />

            <InputBox
              icon={LockSharp}
              label="Password"
              type="password"
              required
              name="password"
              onChange={handleChange}
              value={formData.password}
            />

            {error && <p className="text-red-500">{error}</p>}

            <Button
              type="submit"
              variant="contained"
              color="success"
              className="last:mt-5"
            >
              Login
            </Button>
          </form>

          <p className="last:mt-5">
            Don't have account &nbsp;
            <Link
              component="button"
              variant="body2"
              onClick={handleCreateAccount}
            >
              Create one
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;

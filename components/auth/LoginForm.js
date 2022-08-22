import React, { useState } from "react";
// import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const LoginForm = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const router = useRouter();
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const res = await signIn("credentials", {
  //     redirect: false,
  //     email: state.email,
  //     password: state.password,
  //   });
  //   console.log(res);
  //   if (res.error) {
  //     toast.error(res.error);
  //   } else {
  //     router.push("/");
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };
  const handleChange = (e) => {
    const name = e.target.name;

    console.log(name);
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };
  console.log(login);
  return (
    <div>
      Login
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input
                type="text"
                value={login.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="text"
                name="password"
                value={login.password}
                onChange={handleChange}
              />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

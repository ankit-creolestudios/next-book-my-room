import { getSession } from "next-auth/react";
import React from "react";
import LoginForm from "../components/auth/LoginForm";

const Login = ({ session }) => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};

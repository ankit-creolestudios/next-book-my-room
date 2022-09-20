import { getSession } from "next-auth/react";
import React from "react";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return <RegisterForm />;
};
export default Register;
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
};

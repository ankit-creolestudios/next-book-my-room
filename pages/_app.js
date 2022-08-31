import "../styles/globals.scss";
import { store, wrapper } from "../redux/store";
import Layout from "../components/Layout";
import "antd/dist/antd.css";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);

import { Provider } from "react-redux";
import "../styles/globals.scss";
import { store, wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);

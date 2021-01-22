import { storeWrapper } from "src/store";
import "normalize.css"

function ZksApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default storeWrapper.withRedux(ZksApp)
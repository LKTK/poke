import { storeWrapper, persistor } from "src/store";
import { PersistGate } from 'redux-persist/integration/react'
import "normalize.css"

function ZksApp({ Component, pageProps }) {
    return (
        <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
        </PersistGate>
    )
}

export default storeWrapper.withRedux(ZksApp)
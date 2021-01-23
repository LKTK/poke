import { storeWrapper, persistor } from "src/store";
import { PersistGate } from 'redux-persist/integration/react'
import ThemeProvider from 'src/config/Theme'
import "normalize.css"

function LonPokeApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </ThemeProvider>
    )
}

export default storeWrapper.withRedux(LonPokeApp)
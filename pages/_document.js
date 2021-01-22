import Document, { Html, Head, Main, NextScript } from 'next/document'

class ZksDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="software, salao, beleza, sistema, programa, mobilidade, nuvem, melhor, facil, usar, spa, beleza, bem, estar, estetica, clinica, one, barbearia" />
            <meta name="description" content="Sistema de agendamento para Salões de Beleza, Barbearias, Spas e Clínicas de Estética!" />
            <meta name="viewport" content="width=device-width" />
            <meta name="author" content="Luke Valeenz" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

            <script async defer src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default ZksDocument
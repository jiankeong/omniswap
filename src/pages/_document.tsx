import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Noto Sans Simplified Chinese"
            rel="stylesheet"
          /> */}

          <link rel="icon" href="/favicon.ico"/>
          <link rel="stylesheet" href="/fonts/font.css"></link>
          <title>OMNISWAP</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key={'OMNISWAP'}
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-5BFP1DTRDX`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q1C3CWDCFX', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body style={{
          background:'#14161E'
        }}>
          <Main/>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

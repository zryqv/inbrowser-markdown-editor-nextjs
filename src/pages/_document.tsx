import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto+Slab:wght@300;400;700&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={`overflow-hidden`}>
        <div id="modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

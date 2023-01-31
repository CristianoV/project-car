import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

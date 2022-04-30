import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          href="https://www.recoroad.com/favicon/favicon-32x32.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          href="https://www.recoroad.com/favicon/favicon-32x32.png"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/menu.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/vendors.css" rel="stylesheet" />

        <link href="css/custom.css" rel="stylesheet" />
      </Head>
      <body className="layout_2">
        {/* <div id="preloader">
          <div data-loader="circle-side"></div>
        </div>

        <div id="loader_form">
          <div data-loader="circle-side-2"></div>
        </div> */}

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

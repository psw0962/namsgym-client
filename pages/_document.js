import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/pwa/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />

          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/pwa/ms-icon-144x144.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/pwa/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/pwa/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/pwa/favicon-16x16.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/pwa/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/pwa/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/pwa/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/pwa/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/pwa/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/pwa/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/pwa/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/pwa/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/pwa/apple-icon-180x180.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/pwa/android-icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/png/text-logo.png"
          />

          {/* 폰트 기본 */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          {/* Noto sans */}
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap"
            rel="stylesheet"
          />

          {/* Alfa Slab One */}
          <link
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap"
            rel="stylesheet"
          />

          {/* Jua */}
          <link
            href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
            rel="stylesheet"
          />

          {/* 홈페이지 */}
          <meta name="author" content="namsgym" />
          <meta
            name="keywords"
            content="남스짐, namsgym, health, fitness, gym, pt, PT, personal training, training, weight training, 헬스장, 헬스클럽, 피티샵, PT샵, 피티전문"
          />
          <meta
            name="description"
            content="남다른 몸, 남다른 삶 남스짐에서 시작하세요."
          />

          {/* 오픈 그래프 */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="namsgym | 남스짐" />
          <meta
            property="og:description"
            content="남다른 몸, 남다른 삶 남스짐에서 시작하세요."
          />
          <meta property="og:site_name" content="namsgym | 남스짐" />
          <meta property="og:image" content="" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:url" content="https://www.namsgym.com/" />

          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />

          {/* 트위터용 */}
          <meta name="twitter:card" content="website" />
          <meta name="twitter:title" content="namsgym | 남스짐" />
          <meta
            name="twitter:description"
            content="남다른 몸, 남다른 삶 남스짐에서 시작하세요."
          />
          <meta name="twitter:image" content="" />

          {/* 네이버 검색엔진 */}
          <meta
            name="naver-site-verification"
            content="ba25ba00b30c985846a42b4d115ba32ae505c4ff"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              const theme = localStorage.getItem("theme");
              if(!theme) document.documentElement.setAttribute("data-theme", "light");
              if(theme) document.documentElement.setAttribute("data-theme", theme);
            `,
            }}
          ></script>
        </Head>

        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async ctx => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document?.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } catch (error) {
    console.log(error);
  } finally {
    sheet.seal();
  }
};

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />

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
          ></link>

          {/* Alfa Slab One */}
          <link
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap"
            rel="stylesheet"
          ></link>

          {/* Jua */}
          <link
            href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
            rel="stylesheet"
          ></link>

          {/* 홈페이지 */}
          <meta name="author" content="namsgym" />
          <meta
            name="keywords"
            content="namsgym, health, fitness, gym, PT, personal training, training, weight training, 헬스장, 헬스클럽, 피티샵, PT샵, 피티전문"
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
          <meta property="og:site_name" content="namsgym | 남스짐"></meta>
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
          <meta name="twitter:image" content=""></meta>

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

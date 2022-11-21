import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* 폰트 */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap"
            rel="stylesheet"
          ></link>

          {/* 홈페이지 */}
          <meta name="author" content="alphabetA" />
          <meta
            name="keywords"
            content="alphabetA, ffeed, AlphabetA, 피드, 중고, 거래, 가구, 마켓, 중고 거래, 알파벳에이"
          />
          <meta
            name="description"
            content="중고 가구 거래도 더 이상 어렵고 힘들지 않아요."
          />

          {/* 오픈 그래프 */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="ffeed | 브랜드 중고 가구 커뮤니티"
          />
          <meta
            property="og:description"
            content="중고 가구 거래도 더 이상 어렵고 힘들지 않아요."
          />
          <meta
            property="og:site_name"
            content="ffeed | 브랜드 중고 가구 커뮤니티"
          ></meta>
          <meta
            property="og:image"
            content="https://www.ffeed.me/ffeed-thumbnail.jpeg"
          />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:url" content="https://www.ffeed.me/" />

          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />

          {/* 트위터용 */}
          <meta name="twitter:card" content="website" />
          <meta
            name="twitter:title"
            content="ffeed | 브랜드 중고 가구 커뮤니티"
          />
          <meta
            name="twitter:description"
            content="브랜드 중고 가구 거래도 더 이상 어렵지 않아요."
          />
          <meta
            name="twitter:image"
            content="https://www.ffeed.me/ffeed-thumbnail.jpeg"
          ></meta>

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
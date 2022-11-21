import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'styles/global-style';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRouter } from 'next/router';
import BusinessInfo from 'component/common/business-info';
import TopNavigation from 'component/common/top-navigation';
import BottomNavigation from 'component/common/bottom-navigation';

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, viewport-fit=cover, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=1"
        />
      </Head>

      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <Frame>
              <BusinessInfo />

              <AppFrame>
                <div className="app-wrapper">
                  <TopNavigation />

                  <Component {...pageProps} />

                  <BottomNavigation />
                </div>
              </AppFrame>
            </Frame>
          </RecoilRoot>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;

const Frame = styled.div`
  display: flex;
  justify-content: center;
`;

const AppFrame = styled.div`
  position: relative;
  width: 100vw;
  margin-left: 25vw;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }

  .app-wrapper {
    width: 100%;
    height: 100%;
    max-width: 450px;
    min-height: 100vh;
    margin: 0 auto;
    box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px; */

    // top nav의 높이만큼
    padding-top: 60px;

    // bottom nav 높이만큼
    padding-bottom: 65px;

    // isLoading
    ${props => {
      if (props.isLoading) {
        return css`
          justify-content: center;
          align-items: center;
        `;
      }
    }}
  }
`;
import React, { useState } from 'react';
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
import AppWrapper from 'component/common/app-wrapper';

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
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
                <AppWrapper>
                  <TopNavigation />

                  <Component {...pageProps} />

                  <BottomNavigation />
                </AppWrapper>
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
`;
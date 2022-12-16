import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from 'styles/global-style';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import BusinessInfo from 'component/common/business-info';
import TopNavigation from 'component/common/top-navigation';
import BottomNavigation from '@/component/common/bottom-navigation';
import AppWrapper from 'component/common/app-wrapper';
import dynamic from 'next/dynamic';
import GlobalSpinner from '@/component/common/global-spinner';
import usePageLoading from '@/hooks/usePageLoading';
import { Analytics } from '@vercel/analytics/react';
import Sns from '@/component/common/sns';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Splash = dynamic(() => import('@/component/common/splash'), {
  ssr: false,
});

const MyApp = ({ Component, pageProps }) => {
  const loading = usePageLoading();
  const [queryClient] = useState(() => new QueryClient());
  const [isSplash, setIsSplash] = useState(true);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, user-scalable=no, maximum-scale=1, width=device-width"
        />

        <title>남스짐 | 프리미엄 PT GYM</title>
      </Head>

      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <React.Fragment>
              {isSplash ? (
                <Splash setIsSplash={setIsSplash} />
              ) : (
                <Frame>
                  <BusinessInfo />

                  <AppFrame>
                    <AppWrapper isLoading={loading}>
                      <TopNavigation />

                      {loading ? (
                        <GlobalSpinner color="#B49445" />
                      ) : (
                        <ComponentPaddingWrapper>
                          <Component {...pageProps} />
                          <Analytics />
                          <Sns />
                        </ComponentPaddingWrapper>
                      )}

                      <BottomNavigation />
                    </AppWrapper>
                  </AppFrame>
                </Frame>
              )}
            </React.Fragment>
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

const ComponentPaddingWrapper = styled.main`
  padding: 21px;
`;

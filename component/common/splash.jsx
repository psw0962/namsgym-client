import React, { useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import test from 'public/png/test.gif';

const Splash = ({ setIsSplash }) => {
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setIsSplash(false);
    }, 1000);

    window.sessionStorage.setItem('splash', true);

    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <React.Fragment>
      {!window.sessionStorage.getItem('splash') && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Frame>
            <Image
              src={test}
              alt="logo"
              priority={true}
              quality={100}
              width={300}
              height={250}
            />
          </Frame>
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default Splash;

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  background-color: #fff;
`;

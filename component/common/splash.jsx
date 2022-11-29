import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Font from '@/component/common/font';

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
            <LogoFont color="#b49445" fontSize="5rem" fontWeight="500">
              {`NAM'S`} <br /> GYM
            </LogoFont>
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

const LogoFont = styled(Font)`
  font-family: 'Alfa Slab One', cursive;
  text-align: center;
`;

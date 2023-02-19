import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import bridge from '@/public/gif/bridge.gif';
import kickback from '@/public/gif/kickback.gif';
import ProgressBar from '@ramonak/react-progress-bar';
import styled from 'styled-components';

const FitnessHome = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(40);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div>
      <div style={{ marginBottom: '50px', fontSize: '200px' }}>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>

      <div style={{ marginBottom: '50px' }}>
        <ProgressBar completed={seconds} isLabelVisible={false} />
      </div>

      <NextWrapper>
        <ImageWrapper key="1" width={50} height={50}>
          <Image
            src={kickback}
            alt="kickback"
            priority={true}
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            width={180}
            height={200}
          />
        </ImageWrapper>

        <ImageWrapper key="1" width={50} height={50}>
          <Image
            src={bridge}
            alt="bridge"
            priority={true}
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            width={180}
            height={200}
          />
        </ImageWrapper>
      </NextWrapper>
    </div>
  );
};

export default FitnessHome;

const NextWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

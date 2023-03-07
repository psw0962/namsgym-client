import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import underkickback from '@/public/gif/underkickback.gif';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

const TogetherTest = () => {
  const [item, setItem] = useState();

  useEffect(() => {
    window.localStorage.setItem(
      'program',
      JSON.stringify(['kickback', 'underkickback']),
    ),
      setItem(JSON.parse(window.localStorage.getItem('program')));
  }, []);

  return (
    <Container>
      <div>
        <TestWrapper>
          {item && (
            <ImageWrapper width={40} height={40}>
              <Image
                src={`/gif/${item[0]}.gif`}
                alt="bridge"
                priority={true}
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                width={180}
                height={200}
              />
            </ImageWrapper>
          )}

          <ImageWrapper width={40} height={40}>
            <Image
              src={underkickback}
              alt="underkickback"
              priority={true}
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              width={180}
              height={200}
            />
          </ImageWrapper>
        </TestWrapper>
      </div>
    </Container>
  );
};

export default TogetherTest;

const TestWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

import React from 'react';
import styled from 'styled-components';
import SnsButton from '@/component/common/sns-button';
import { snsLogoImages } from '@/constant/home';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import { up, close } from '@/public/svg/index';
import { useRecoilState } from 'recoil';
import { isOpenSnsFrameStateAtom } from 'atoms';

const Sns = () => {
  const [isOpenSnsFrameState, setIsOpenSnsFrameState] = useRecoilState(
    isOpenSnsFrameStateAtom,
  );

  return (
    <React.Fragment>
      {isOpenSnsFrameState === false && (
        <UpSnsFrame
          width={3}
          height={3}
          pointer={true}
          onClick={() => setIsOpenSnsFrameState(true)}
        >
          <Image
            src={up}
            alt="up"
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </UpSnsFrame>
      )}

      <SnsFrame isOpenSnsFrameState={isOpenSnsFrameState}>
        {isOpenSnsFrameState === true && (
          <CloseSnsFrame
            width={3}
            height={3}
            pointer={true}
            onClick={() => setIsOpenSnsFrameState(false)}
          >
            <Image
              src={close}
              alt="close"
              priority={true}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </CloseSnsFrame>
        )}

        <SnsWrapper isOpenSnsFrameState={isOpenSnsFrameState}>
          {snsLogoImages.map(item => {
            return (
              <SnsButton
                key={item.id}
                src={item.src}
                url={item.url}
                alt={item.alt}
              />
            );
          })}
        </SnsWrapper>
      </SnsFrame>
    </React.Fragment>
  );
};

export default Sns;

const SnsFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-left: 35rem;
  position: fixed;
  bottom: ${props => (props.isOpenSnsFrameState ? '90px' : '-400px')};
  transition: 0.2s all;
  z-index: 50;

  img {
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const SnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  visibility: ${props => (props.isOpenSnsFrameState ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpenSnsFrameState ? 1 : 0)};
  transition: 0.2s all;
`;

const CloseSnsFrame = styled(ImageWrapper)`
  background-color: #fff;
  border-radius: 100%;
`;

const UpSnsFrame = styled(ImageWrapper)`
  position: fixed;
  bottom: 100px;
  background-color: #fff;
  border-radius: 100%;
  margin-left: 37.8rem;
  z-index: 50;

  img {
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

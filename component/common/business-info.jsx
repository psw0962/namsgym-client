import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import logo from 'public/png/logo.png';
import ImageWrapper from './image-wrapper';
import Font from './font';

const BusinessInfo = () => {
  const router = useRouter();

  return (
    <Frame>
      <LogoSection>
        <CustomFont fontSize="3rem" fontWeight="500" margin="0 0 2rem 0"><span className='first'>남다른 몸</span> <span className='second'>남다른 삶</span></CustomFont>

        <ImageWrapper>
          <Image src={logo} alt="logo" />
        </ImageWrapper>
      </LogoSection>

      <BusinessInfoSection>
        <p>{`상호명 : (주)남스짐 컴퍼니`}</p>
        <p>
          사업자등록번호 : 250-81-02543
        </p>
        <p>
          대표자명 : 남건우
        </p>
        <p>
          주소 : 서울시 강남구 테헤란로8길 22, 202동 143호
        </p>
        <p>
          전화번호 : 02-558-573333
        </p>
      </BusinessInfoSection>
    </Frame>
  );
};

export default BusinessInfo;

const Frame = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: fixed;
  left: 25%;
  transform: translate(-25%, 0);
  z-index: 3;

  @media screen and (max-width: 1200px) {
    display: none;
  }

  border: 1px solid red;
`;

const LogoSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const BusinessInfoSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const CustomFont = styled(Font)`
  .first {
    color: #FB4264;
  text-shadow: 0 0 3vw #F40A35;

    @keyframes first {
  0%,
  100% {
    text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #272424, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
    color: #FED128;
  }
  50% {
    text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
    color: #806914;
  }
}

  animation: first 1s ease infinite;
  -moz-animation: first 1s ease infinite;
  -webkit-animation: first 1s ease infinite;
  }

  .second {
    @keyframes flux {
  0%,
  100% {
    text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
    color: #28D7FE;
  }
  50% {
    text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
    color: #146C80;
  }
}

    animation: flux 2s linear infinite;
  -moz-animation: flux 2s linear infinite;
  -webkit-animation: flux 2s linear infinite;
  -o-animation: flux 2s linear infinite;
  }
  
`;

const Button = styled.div`
  width: 12rem;
  height: 5rem;
  padding: 1.8rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0 3rem 0;

  cursor: pointer;
  border-radius: 6px;
  background-color: #fff;
  white-space: nowrap;
`;

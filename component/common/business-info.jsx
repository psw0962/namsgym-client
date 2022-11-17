import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import logo from 'public/png/logo.png';

const BusinessInfo = () => {
  const router = useRouter();

  return (
    <Frame>
      <LogoSection>
        <Image src={logo} alt="logo" />
        <CustomFont>남다른 몸 남다른 삶</CustomFont>
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
          전화번호 : 02-558-5733
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

const CustomFont = styled.p`
  display: flex;
  align-items: flex-start;
  font-size: 4rem;
  font-weight: 800;
  margin-top: 6rem;
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

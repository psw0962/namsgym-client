import Image from 'next/image';
import styled from 'styled-components';
import Font from '@/component/common/font';
import ImageWrapper from '../common/image-wrapper';
import { useRouter } from 'next/router';
import useThemeState from '@/hooks/useThemeState';

const CenterCard = ({ id, thumbNail, centerName, address }) => {
  const router = useRouter();
  const { themeState } = useThemeState();

  return (
    <Frame themeState={themeState} onClick={() => router.push(`/center/${id}`)}>
      <ImageWrapper height={23}>
        <Image src={thumbNail} alt={centerName} priority={true} />
      </ImageWrapper>

      <Font fontSize="1.6rem" fontWeight={700}>
        {centerName}
      </Font>

      <Font fontSize="1.2rem" fontWeight={700}>
        {address}
      </Font>
    </Frame>
  );
};

export default CenterCard;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.5rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${props =>
    props.themeState === 'dark' ? '#1E1E1E' : '#fff'};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: translateY(-30px);
    transition: all 0.2s;
  }

  img {
    border-radius: 10px;
  }
`;

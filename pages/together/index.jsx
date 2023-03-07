import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import underkickback from '@/public/gif/underkickback.gif';
import bridge from '@/public/gif/underkickback.gif';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import Font from '@/component/common/font';
import Line from '@/component/common/line';
import Button from '@/component/common/button';

const programData = [
  { id: 1, name: '덩키킥', image: underkickback },
  { id: 2, name: '브릿지', image: bridge },
  { id: 3, name: '런지', image: bridge },
  { id: 4, name: '스쿼트', image: underkickback },
  { id: 5, name: '스플릿 스쿼트', image: underkickback },
  { id: 6, name: '가블릿 스쿼트', image: underkickback },
  { id: 7, name: '프론트 스쿼트', image: underkickback },
];

const Together = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    window.localStorage.setItem('program', JSON.stringify(programData)),
      setItem(JSON.parse(window.localStorage.getItem('program')));
  }, []);

  return (
    <Container>
      <ContainerWrapper>
        <Font fontSize="4.5rem" fontWeight={500} margin="0 0 2rem 0">
          선택한 프로그램
        </Font>

        <SelectedBox>
          {item?.map(x => {
            return (
              <CardWrapper key={x?.id}>
                <ImageWrapper width={20} height={20}>
                  <Image
                    className="program"
                    src={x?.image}
                    alt={x?.name}
                    priority={true}
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                    width={180}
                    height={200}
                  />
                </ImageWrapper>

                <Font fontSize="2.5rem" fontWeight="500" margin="20px 0">
                  {x.name}
                </Font>

                <Button size="small" color="black" type="button">
                  삭제하기
                </Button>
              </CardWrapper>
            );
          })}
        </SelectedBox>

        <Line margin="40px 0" width="80%" />

        <div
          style={{
            width: '50%',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            marginBottom: ' 4rem',
          }}
        >
          <Font fontSize="2rem" fontWeight="500">
            검색
          </Font>

          <input type="text" />
        </div>

        <ProgramContainer>
          {item?.map(x => {
            return (
              <CardWrapper key={x?.id}>
                <ImageWrapper width={20} height={20}>
                  <Image
                    className="program"
                    src={x?.image}
                    alt={x?.name}
                    priority={true}
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                    width={180}
                    height={200}
                  />
                </ImageWrapper>

                <Font fontSize="2.5rem" fontWeight="500" margin="20px 0">
                  {x.name}
                </Font>

                <Button size="small" color="yellow" type="button">
                  추가하기
                </Button>
              </CardWrapper>
            );
          })}
        </ProgramContainer>
      </ContainerWrapper>
    </Container>
  );
};

export default Together;

const Container = styled.div`
  width: 1400px;
  padding: 3rem;

  input {
    width: 80%;
    padding: 0.5rem;
    border: 1px solid #acacac;
    border-radius: 5px;
    outline: none;
  }

  .program {
    border-radius: 20px !important;
  }
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgramContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const SelectedBox = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  width: 80%;
  padding: 2rem;
  border: 1px solid #000;
  border-radius: 20px;
`;

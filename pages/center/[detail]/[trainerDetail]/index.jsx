import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import makeTrainerData from '@/function/makeTrainerData';
import makeCenterData from '@/function/makeCenterData';
import styled from 'styled-components';
import Button from '@/component/common/button';
import Font from '@/component/common/font';
import { useRecoilState } from 'recoil';
import { reviewFilterStateAtom, centerTabStateAtom } from 'atoms';
import dynamic from 'next/dynamic';
import Line from '@/component/common/line';
const Carousel = dynamic(() => import('@/component/common/carousel'), {
  suspense: true,
});

const TrainerDetail = () => {
  const router = useRouter();
  const centerNumber = router.query.detail;
  const trainerNumber = router.query.trainerDetail;
  const [centerData, setCenterData] = useState({});
  const [trainerData, setTrainerData] = useState({});
  const [reviewFilterState, setReviewFilterState] = useRecoilState(
    reviewFilterStateAtom,
  );
  const [centerTabState, setCenterTabState] =
    useRecoilState(centerTabStateAtom);

  useEffect(() => {
    makeTrainerData(centerNumber, trainerNumber, setTrainerData);
    makeCenterData(centerNumber, setCenterData);
  }, [centerNumber, trainerNumber]);

  const goToReview = name => {
    setReviewFilterState(prev => {
      return {
        ...prev,
        keyWord: name,
      };
    });
    router.push('/review');
  };

  const nullObject = () => {
    if (trainerData === null) {
      return false;
    } else {
      return Object.keys(trainerData).length === 0;
    }
  };

  return (
    <React.Fragment>
      {(trainerData === undefined || nullObject()) && (
        <Unregistered>
          <Font fontSize="1.8rem" margin="0 0 4rem 0">
            현재 등록되어 있지 않은 트레이너입니다.
          </Font>

          <Button color="yellow" size="medium" onClick={() => router.back()}>
            뒤로가기
          </Button>

          <Button color="white" size="medium" onClick={() => router.push('/')}>
            홈으로
          </Button>
        </Unregistered>
      )}

      {trainerData !== undefined && nullObject() === false && (
        <React.Fragment>
          <Font fontSize="2rem" margin="0 0 4rem 0">
            {`${trainerData?.name} 이력 사항 (${centerData?.centerName})`}
          </Font>

          <Carousel data={trainerData} width={35} height={40} />

          <Font fontSize="2rem" margin="2rem 0 0 0">
            이력 사항
          </Font>

          <CareerWrapper>
            {trainerData?.career?.map((item, index) => {
              return (
                <Font key={index} fontSize="1.2rem">
                  {item}
                </Font>
              );
            })}
          </CareerWrapper>

          <Line />

          <Font fontSize="2rem" margin="2rem 0 0 0">
            자격 사항
          </Font>

          <TagWrapper>
            {trainerData?.tags?.map((tag, index) => {
              return <Tag key={index}>{tag}</Tag>;
            })}
          </TagWrapper>

          <Line />

          <Font
            fontSize="1.8rem"
            fontWeight={500}
            margin="2rem 0 0 0"
            pointer={true}
            textDecoration="underline"
            onClick={() => {
              goToReview(trainerData?.name);
            }}
          >
            {trainerData?.name} {`리뷰 보러가기 >`}
          </Font>

          <Font
            fontSize="1.8rem"
            fontWeight={500}
            margin="2rem 0 0 0"
            pointer={true}
            textDecoration="underline"
            onClick={() => {
              router.push(`/center/${centerData?.centerName?.slice(0, 1)}`);
              setCenterTabState('지점 안내');
            }}
          >
            {centerData?.centerName} {`지점 및 상담안내 >`}
          </Font>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TrainerDetail;

const Unregistered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const CareerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;

  white-space: pre-wrap;
  width: fit-content;
  max-width: 35rem;
  background-color: #b49445;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1rem;
  border-radius: 5px;
`;

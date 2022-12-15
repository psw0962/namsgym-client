import styled from 'styled-components';
import TrainerCard from './trainer-card';

const CenterTrainers = ({ centerData }) => {
  return (
    <Frame>
      {centerData?.trainers?.map(item => {
        return (
          <TrainerCard
            key={item?.id}
            data={item}
            centerName={centerData?.centerName}
          />
        );
      })}
    </Frame>
  );
};

export default CenterTrainers;

const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

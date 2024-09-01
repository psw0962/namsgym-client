import styled from 'styled-components';
import Font from '@/component/common/font';
import EventCard from '@/component/event/event-card';
import { eventData } from '@/constant/event';

const Event = () => {
  return (
    <Frame>
      <Font fontSize="2rem" margin="0 0 6rem 0">
        이벤트
      </Font>

      <CardWrapper>
        {eventData.map(item => {
          return <EventCard key={item?.id} data={item} />;
        })}
      </CardWrapper>
    </Frame>
  );
};

export default Event;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

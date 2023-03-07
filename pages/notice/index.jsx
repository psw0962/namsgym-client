import { useState } from 'react';
import styled from 'styled-components';
import Font from '@/component/common/font';
import Modal from '@/component/common/modal.jsx';
import useThemeState from '@/hooks/useThemeState';

const NoticeData = [
  {
    id: 1,
    title: '남스짐 법인 전환 안내',
    detail: '준비중 입니다.',
    createdAt: '2023-03-07',
  },
];

const Notice = () => {
  const [noticeDetail, setNoticeDetail] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { themeState } = useThemeState();

  return (
    <Frame>
      <Font fontSize="2rem" margin="0 0 6rem 0">
        공지사항
      </Font>

      {NoticeData.map(item => {
        return (
          <>
            <NoticeBox
              themeState={themeState}
              onClick={() => {
                setIsMenuOpen(true);
                setNoticeDetail(NoticeData[item.id - 1]);
              }}
            >
              <Font fontSize="2rem">[공지] {item.title}</Font>

              <Font fontSize="1.4rem">{item.detail}</Font>

              <Font fontSize="1.4rem">{item.createdAt}</Font>
            </NoticeBox>
          </>
        );
      })}

      <Modal state={isMenuOpen} setState={setIsMenuOpen} isCenter={false}>
        <NoticeDetailWrapper>
          <Font fontSize="2rem" color="#000">
            {noticeDetail?.title}
          </Font>

          <Font fontSize="1.4rem" color="#000">
            {noticeDetail?.detail}
          </Font>

          <Font fontSize="1.4rem" margin="3rem 0 0 0" color="#000">
            {noticeDetail?.createdAt}
          </Font>
        </NoticeDetailWrapper>
      </Modal>
    </Frame>
  );
};

export default Notice;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: ${props =>
    props.themeState === 'dark' ? '1px solid #fff' : '1px solid #000'};
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
`;

const NoticeDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Font from '@/component/common/font';

const Modal = ({ children }) => {
  const [closeState, setCloseState] = useState(true);
  const modalRef = useRef();

  const CloseHandler = () => {
    if (closeState) {
      setCloseState(false);
    } else {
      setCloseState(true);
    }
  };

  const handleClickOutside = event => {
    if (modalRef.current && modalRef.current.contains(event.target)) {
      setCloseState(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  return (
    <Background
      active={closeState}
      ref={modalRef}
      onBlur={() => setCloseState(true)}
    >
      <ModalCard>
        <CustomFont fontSize="1.4rem">닫기</CustomFont>

        <ChildrenFrame>{children}</ChildrenFrame>
      </ModalCard>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  display: ${props => (props.active ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const ModalCard = styled.div`
  position: absolute;
  top: 30%;
  right: 50%;
  padding: 5rem;
  width: 60vw;
  height: 60vh;
  border-radius: 20px;
  transform: translateY(-30%) translateX(50%);
  background-color: #fff;
`;

const ChildrenFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50rem;
`;

const CustomFont = styled(Font)`
  position: absolute;
  top: 7%;
  right: 5%;
  cursor: pointer;
`;

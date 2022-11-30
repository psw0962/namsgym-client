import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import useOnClickOutside from 'hooks/useOnClickOutside';
import Button from './button';

const Modal = ({ state, setState, children }) => {
  const moodalOpenInRef = useRef();
  const modalOpenExceptRef = useRef();
  useOnClickOutside({
    inRef: moodalOpenInRef,
    exceptRef: modalOpenExceptRef,
    handler: () => {
      setState('');
    },
  });

  useEffect(() => {
    if (state) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [state]);

  return (
    <Frame className={state ? 'slideUp' : 'slideDown'}>
      <DialogFrame
        ref={moodalOpenInRef}
        className={state ? 'slideUp' : 'slideDown'}
      >
        {/* <p
          onClick={() => {
            setState(false);
          }}
        >
          닫기
        </p> */}
        <div>{children}</div>

        <Button
          color="black"
          size="large"
          onClick={() => {
            setState(false);
          }}
        >
          돌아가기
        </Button>
      </DialogFrame>
    </Frame>
  );
};

export default Modal;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  visibility: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 103;
  transition: all 0.2s ease-in-out;

  &.slideUp {
    visibility: visible;
    opacity: 1;
  }

  &.slideDown {
    opacity: 0;
  }
`;

const DialogFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  visibility: hidden;
  position: absolute;
  bottom: -300px;
  width: 100%;
  max-width: 450px;
  height: 20rem;
  padding: 2rem 2rem;
  border-radius: 18px 18px 0px 0px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  z-index: 103;

  &.slideUp {
    visibility: visible;
    opacity: 1;
    bottom: 0px;
  }

  &.slideDown {
    opacity: 0;
  }

  margin-left: 25vw;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

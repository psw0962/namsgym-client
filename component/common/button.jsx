import styled, { css } from 'styled-components';

const CommonButton = styled.button`
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: ${props => (props.size === 'xsmall' ? '50px' : '3px')};

  &:disabled {
    cursor: default;
  }

  // color
  ${props => {
    switch (props.color) {
      case 'black':
        return css`
          color: #fff;
          background-color: #000;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          &:disabled {
            background-color: #d1d1d6;
          }
        `;
      case 'white':
        return css`
          color: #000;
          background-color: #fff;
          border: 0.5px solid #d1d1d6;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          &:disabled {
            color: #d1d1d6;
          }
        `;
      case 'yellow':
        return css`
          color: #fff;
          background-color: #b49445;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          &:disabled {
            background-color: #d1d1d6;
          }
        `;
    }
  }}

  // size
  ${props => {
    switch (props.size) {
      case 'large':
        return css`
          width: 100%;
          padding: 18px 0px;
        `;
      case 'medium':
        return css`
          width: 100%;
          padding: 14px 0px;
        `;
      case 'small':
        return css`
          width: 100%;
          padding: 10px 0px;
        `;
      case 'xsmall':
        return css`
          width: 70px;
          padding: 9px 0px;
        `;
    }
  }}
`;

const Button = props => {
  return <CommonButton {...props}>{props.children}</CommonButton>;
};

export default Button;

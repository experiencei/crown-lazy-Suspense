import styled, { css } from 'styled-components';

const ButtonStyled = styled.css`
  background-color: black;
  border : none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const GoogleSignin = styled.css`
    background-color: #4285f4;
    &:hover {
      background-color: #357ae8;
    }
`;

const Invertedbutton = styled.css`
   background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
    }
`
const CustomBtn = props => {
    if (props.googleSignin) {
        return GoogleSignin;
      }
      return props.inverted ? Invertedbutton : ButtonStyled;
}

export const CustomButton = styled.button`
 min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  border: none;
  color: white;

  ${CustomBtn}
`;
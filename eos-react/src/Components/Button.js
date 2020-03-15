import React from "react";
import styled from "styled-components";

const ButtonLoad = styled.button`
  padding: 10px;
  background-color: green;
  width: 100%;
  max-width: 200px;
  display: block;
  height: 50px;
  border-radius: 10px;
  margin: 0 auto;
  position: relative;
  font-size: 24px;
  line-height: 28px;
`;

const Button = props => {
  return (
    <>
      <ButtonLoad>LOAD</ButtonLoad>
    </>
  );
};

export default Button;

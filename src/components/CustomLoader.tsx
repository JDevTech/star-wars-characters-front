import { FC } from "react";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const SpinnerContainer = styled.div`
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
`;

const Spinner = styled.div`
  height: 50px;
  width: 50px;
  border: 2px solid white;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`;

const SpinnerTitle = styled.h3`
  color: white;
  text-align: center;
`;

const CustomLoader: FC = () => {
  return (
    <SpinnerContainer>
      <Spinner />
      <SpinnerTitle>Loading...</SpinnerTitle>
    </SpinnerContainer>
  );
};

export default CustomLoader;

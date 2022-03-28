import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.hight || "100%"};

  flex-wrap: ${(props) => (props.wrap ? "wrap" : "no-wrap")};
`;

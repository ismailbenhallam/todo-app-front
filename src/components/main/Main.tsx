import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 30px 122px 0 340px;
  padding: 0px 10px;
`;

const Main: FC<any> = (props) => {
  return <Container>{props.children}</Container>;
};

export default Main;

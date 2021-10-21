import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 30px 122px 30px 340px;
  padding: 0px 10px;
`;

const Root: FC = (props) => {
  return <Container>{props.children}</Container>;
};

export default Root;

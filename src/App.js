import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import TweetBar from "./TweetBar";
import RightBar from "./RightBar";
const Container = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function App() {
  return (
    <Container>
      <Sidebar />
      <TweetBar />
      <RightBar />
    </Container>
  );
}

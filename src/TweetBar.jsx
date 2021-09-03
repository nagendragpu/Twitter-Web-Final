import styled from "styled-components";
import Navbar from "./components/Navbar";
import Tweet from "./components/Tweet";
import { twitts } from "../DummyData";
const Container = styled.div`
  flex: 1.5;
  border: solid lightgrey;
  border-width: 0 0.5px;
  /* background-color: red; */
`;

export default function TweetBar() {
  return (
    <Container>
      <Navbar />
      {twitts.map((item, i) => {
        return <Tweet key={i} item={item} />;
      })}
    </Container>
  );
}

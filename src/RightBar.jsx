import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import Trending from "./components/Trending";

const Container = styled.div`
  flex: 1;
  height: 100vh;
  padding: 5px 30px;
  /* background-color: red; */
`;

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background: gray; */
  /* justify-content: space-between; */
  /* margin-right: auto; */
`;

export default function RightBar() {
  return (
    <Container>
      <Wrapper>
        <SearchBar />
        <Trending />
      </Wrapper>
    </Container>
  );
}

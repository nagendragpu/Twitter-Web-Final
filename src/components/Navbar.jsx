import styled from "styled-components";
import FlareIcon from "@material-ui/icons/Flare";

const Container = styled.div`
  display: flex;
  height: 30px;
  padding: 10px;
  border-bottom: solid lightgrey;
  border-width: 0.5px;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  /* justify-content: center; */
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: yellow; */
`;
const Text = styled.h3``;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Text>Home</Text>
        <FlareIcon />
      </Wrapper>
    </Container>
  );
}

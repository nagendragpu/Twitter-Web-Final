import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const Container = styled.div`
  background-color: #e1e8ed;
  padding: 10px 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  cursor: pointer;
  margin-bottom: 16px;
  &:hover {
    border: solid #1da1f2;
    border-width: 0.5px;
  }
`;
const Input = styled.input`
  border: none;
  background: #e1e8ed;
  color: black;
  &:focus {
    outline: none;
  }
`;
export default function SearchBar() {
  return (
    <Container>
      <SearchIcon style={{ fontWeight: 400 }} />
      <Input value="Search Twitter"></Input>
    </Container>
  );
}

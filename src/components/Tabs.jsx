import { Badge } from "@material-ui/core";
import styled from "styled-components";

const TabWrapper = styled.div`
  display: flex;

  align-items: center;
  width: max-content;
  /* border: solid; */
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 15px;
  border-radius: 20px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #e1e8ed;
  }
`;
const Icon = styled.div`
  display: inline;
`;
const TabsName = styled.div`
  /* flex: 1; */
  display: inline;
  margin-left: 20px;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: bolder;
  /* color: blue; */
`;

export default function Tabs({
  name,
  IconRender,
  onClick,
  selectedTab,
  badge
}) {
  return (
    <TabWrapper onClick={onClick}>
      <Icon>
        <Badge variant="dot" color="primary" invisible={badge ? false : true}>
          {IconRender}
        </Badge>
      </Icon>
      <TabsName>{name}</TabsName>
    </TabWrapper>
  );
}

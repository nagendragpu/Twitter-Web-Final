import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import Tabs from "./components/Tabs";
import HomeIcon from "@material-ui/icons/Home";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Avatar } from "@material-ui/core";
import { useState } from "react";

const Container = styled.div`
  flex: 1;
  height: 100vh;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  width: 50%;
  height: 97%;
  display: flex;
  flex-direction: column;
  /* background: gray; */
  justify-content: space-between;
  margin-left: auto;
  padding: 10px 20px;
`;

const TabsContainer = styled.div``;

const TweetButton = styled.div`
  background: #1da1f2;
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: sans-serif;
  color: #ffffff;
  font-size: 15px;
  padding: 15px 20px 15px 20px;
  /* text-decoration: none; */
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  width: 80%;
  cursor: pointer;
  &:hover {
    background: #3cb0fd;
  }
`;

const ProfileTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileUserDetail = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 10px;
  margin-right: 10px;
  /* padding-left: 10px; */
  /* padding-right: 10px; */
  /* border: solid; */
`;

const ProfileName = styled.h1`
  font-size: 15px;
  font-weight: bold;
  text-overflow: ellipsis;
  line-height: 15px;
`;
const ProfileUsername = styled.h1`
  font-size: 15px;
  font-weight: normal;
  color: gray;
`;

export default function Sidebar() {
  const [selectedTab, setSelectedTab] = useState("Home");
  function handlebutton(name) {
    setSelectedTab(name);
  }
  console.log(selectedTab);
  return (
    <Container>
      <Wrapper>
        <TabsContainer>
          <TwitterIcon
            style={{
              color: "#1DA1F2",
              fontSize: 30,
              marginBottom: 10,
              marginLeft: 15
            }}
          />

          <Tabs
            name="Home"
            IconRender={<HomeIcon style={{ fontSize: "25px" }} />}
            onClick={() => {
              handlebutton("Home");
            }}
            selectedTab={selectedTab}
          />

          <Tabs
            name="Explore"
            IconRender={<AcUnitIcon style={{ fontSize: "25px" }} />}
            onClick={() => {
              handlebutton("Explore");
            }}
            selectedTab={selectedTab}
          />
          <Tabs
            name="Notification"
            IconRender={
              <NotificationsNoneOutlinedIcon style={{ fontSize: "25px" }} />
            }
            onClick={() => {
              handlebutton("Notification");
            }}
            selectedTab={selectedTab}
            badge={true}
          />
          <Tabs
            name="Messages"
            IconRender={
              <MailOutlineOutlinedIcon style={{ fontSize: "25px" }} />
            }
            onClick={() => {
              handlebutton("Messages");
            }}
            selectedTab={selectedTab}
          />
          <Tabs
            name="Bookmark"
            IconRender={
              <BookmarkBorderOutlinedIcon style={{ fontSize: "25px" }} />
            }
            onClick={() => {
              handlebutton("Bookmark");
            }}
            selectedTab={selectedTab}
          />
          <Tabs
            name="Lists"
            IconRender={<ListAltOutlinedIcon style={{ fontSize: "25px" }} />}
            onClick={() => {
              handlebutton("Lists");
            }}
            selectedTab={selectedTab}
          />
          <Tabs
            name="Profile"
            IconRender={
              <PersonOutlineOutlinedIcon style={{ fontSize: "25px" }} />
            }
            onClick={() => {
              handlebutton("Profile");
            }}
            selectedTab={selectedTab}
          />
          <Tabs
            name="More"
            IconRender={<MoreHorizOutlinedIcon style={{ fontSize: "25px" }} />}
            onClick={() => {
              handlebutton("Home");
            }}
            selectedTab={selectedTab}
          />
          <TweetButton onClick={() => handlebutton()}>Tweet</TweetButton>
        </TabsContainer>

        <ProfileTab>
          <Avatar alt="Nagendra" src="/Assets/profile.png" />
          <ProfileUserDetail>
            <ProfileName>Nagendra |నాగేంద్ర|ناگیندر</ProfileName>
            <ProfileUsername>@nagendragpu</ProfileUsername>
          </ProfileUserDetail>
          <MoreHorizOutlinedIcon />
        </ProfileTab>
      </Wrapper>
    </Container>
  );
}

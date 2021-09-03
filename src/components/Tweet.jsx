import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

const Container = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f5f8fa;
  }
`;
const Wrapper = styled.div`
  padding: 10px;
  display: flex;
`;
const Left = styled.div`
  /* flex: 1; */
`;
const Right = styled.div`
  flex: 1;
  /* border: solid; */
`;

const TweetContent = styled.div`
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 500;
`;
const TweetImage = styled.div`
  margin-top: 16px;
  max-width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: solid lightgray;
  border-width: 0.5px;
`;
const TweetHeader = styled.div`
  display: flex;
  align-items: center;
`;
const TweetFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

const TweetName = styled.div`
  font-weight: 600;
  font-family: sans-serif;
`;
const TweetUsername = styled.div``;
const TweetTime = styled.div`
  flex: 1;
  font-size: 14px;
`;
const Replies = styled.div`
  display: flex;
`;
const Retweets = styled.div`
  display: flex;
`;
const Love = styled.div`
  display: flex;
`;

export default function Tweet({ item }) {
  let uri = item.image;
  return (
    <Container>
      <Wrapper>
        <Left>
          <Avatar
            src={require("../Assets/profile.png")}
            style={{ width: 55, height: 55 }}
          />
        </Left>
        <Right>
          <TweetHeader>
            <TweetName>{item.name}</TweetName>
            <TweetUsername>{item.handle}</TweetUsername>
            <TweetTime>. {item.date}</TweetTime>
            <MoreHorizOutlinedIcon style={{ fontSize: "25px" }} />
          </TweetHeader>
          <TweetContent>
            {item.content}
            <TweetImage>
              <img
                src={uri}
                alt="share"
                style={{
                  width: "100%",
                  height: "80%",
                  objectFit: "cover"
                }}
              />
            </TweetImage>
          </TweetContent>

          <TweetFooter>
            <Replies>
              <img
                src={require("/src/Assets/chat.png")}
                alt="chat"
                style={{ width: 15, height: 15, marginRight: "16" }}
              />
              <h5>{item.comments}</h5>
            </Replies>
            <Retweets>
              <img
                src={require("/src/Assets/retweet.png")}
                alt="retweet"
                style={{ width: 15, height: 15 }}
              />
              <h5>{item.retweets}</h5>
            </Retweets>
            <Love>
              <img
                src={require("/src/Assets/tweetlove.png")}
                alt="share"
                style={{ width: 15, height: 15 }}
              />
              <h5>{item.hearts}</h5>
            </Love>
            <img
              src={require("/src/Assets/export.png")}
              alt="share"
              style={{ width: 15, height: 15 }}
            />
          </TweetFooter>
        </Right>
      </Wrapper>
    </Container>
  );
}

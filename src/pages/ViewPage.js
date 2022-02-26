import styled from "styled-components";
import { ClipboardCopy } from "./../components";
import { Button } from "../elements";
import ExternalLink from "./../components/Svg";
import CategoryTag from "../elements/CategoryTag";

const ViewPage = ({ dataList }) => {
    
  const dummyData = [
    {
      id: 1,
      author: "효순",
      title: "안녕하세요",
      category: "HTML",
      url: "http://www.naver.com",
      content: "유용한거 같아서 공유합니다.",
      created_date: new Date().toLocaleString(),
    },
  ];

  const { id, author, title, category, url, content, created_date } =
    dummyData[0];
  const dateTimeInKR = `${new Date(created_date).getFullYear()}년 ${new Date(
    created_date
  ).getMonth()}월 ${new Date(created_date).getDay()}일`;

  return (
    <div>
        <Container>
        <header>
            <Title>{title}</Title>
            <CategoryTag category={category}>{category}</CategoryTag>
            <Wrapper>
            <span>{author}</span>&middot;
            <span>{dateTimeInKR}</span>
            </Wrapper>
        </header>
        <URLCopyBoxWrapper>
            <h2>공유 URL</h2>
            <ClipboardCopy url={url} />
            <a href={url} target="_blank" rel="noreferrer">
            <ExternalLink />
            공유페이지 새창으로 열기
            </a>
        </URLCopyBoxWrapper>
        <ContentWrapper>
            <h2>공유하고 싶은 이유 or 상세정보</h2>
            <Content>{content}</Content>
        </ContentWrapper>
        <ButtonContainer>
            <Button size="small">수정</Button>
            <Button size="small" bg="#fff" color="#8465e1" border="#8465e1">삭제</Button>
        </ButtonContainer>
        </Container>
    </div>
  );
};

export default ViewPage;

const Container = styled.article`
  padding: 3%;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 11px;
`;

const Category = styled.p`
  display: inline-block;
  font-size: 1rem;
  border: solid 1px #ebe1f6;
  border-radius: 15px;
  padding: 3px 12px;
  margin-bottom: 24px;
  background-color: #ebe1f6;
`;

const Wrapper = styled.div`
  font-size: 0.75rem;
  color: #999999;
  margin-bottom: 33px;
`;

const URLCopyBoxWrapper = styled.div`
  overflow: hidden;
  h2 {
    margin-bottom: 11px;
    font-weight: 700;
  }
  a {
    color: #fdb674;
    float: right;
    margin-top: 7px;
    text-decoration: underline;
    font-size: 0.875rem;
    fill: #fdb674;
    margin-bottom: 23px;
  }
  svg {
    vertical-align: bottom;
  }
`;

const ContentWrapper = styled.div`
  h2 {
    clear: right;
    margin-bottom: 11px;
    font-weight: 700;
  }
`;

const Content = styled.p`
  min-height: 100px;
  max-height: 25vh;
  overflow: scroll;
  overflow-x: hidden;
  line-height: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
`;

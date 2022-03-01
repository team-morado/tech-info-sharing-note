import styled from "styled-components";
import { ClipboardCopy } from "./../components";
import { Button } from "../elements";
import { ExternalLink } from "./../components/Svg";
import CategoryTag from "../elements/CategoryTag";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ViewPage = ({ dataList }) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (dataList.length >= 1) {
      const targetData = dataList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetData) {
        // 게시글 id가 존재할 때
        setData(targetData);
      } else {
        // 없는 게시글 id 일때
        navigate("/", { replace: true });
      }
    }
  }, [id, dataList]);

  if (!data) {

    return <div>로딩중입니다...</div>;

  } else {

    const { author, title, category, url, content, created_date } = data;
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
            <Button size="small" bg="#fff" color="#8465e1" border="#8465e1">
              삭제
            </Button>
          </ButtonContainer>
        </Container>
      </div>
    );
  }
};

export default ViewPage;

const Container = styled.article`
  padding: 3%;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 11px;
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

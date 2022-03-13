import styled from "styled-components";
import {useParams, useNavigate} from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {deleteTechInfoFB} from "../shared/redux/modules/techInfo";

import {ClipboardCopy, ExternalLink } from "./../components";
import {Button, CategoryTag} from "../elements";


const ViewPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const techInfo_index = params.index;
  const techInfo_list = useSelector((state) => state.techInfo.list);

  // 작성일시 표시
  const timeData = new Date(techInfo_list[techInfo_index].created_date);
  const year = timeData.getFullYear();
  const month = timeData.getMonth() + 1;
  const day = timeData.getDate();
  const hour = timeData.getHours();
  const minutes = timeData.getMinutes();

  const setAmPm = hour >= 0 && hour < 12 ? "오전" : "오후";
  
  // 12시간제 표시
  let hour12H = 0;
  if(hour === 12){
    hour12H = hour;
  } else if(hour === 0) {
    hour12H = 12;
  } else {
    hour12H = hour%12;
  }

  if(hour12H < 10) {
    hour12H = "0" + hour12H;
  }

  let minutes12H = 0;
  if(minutes < 10){
    minutes12H = "0" + minutes;
  } else {
    minutes12H = minutes;
  }

  const dateTimeInKR = `${year}년 ${month}월 ${day}일 ${setAmPm} ${hour12H}:${minutes12H}`;

  return (
      <Container>
        <header>
          <Title>{techInfo_list[techInfo_index] ? techInfo_list[techInfo_index].title : ""}</Title>
          <CategoryTag category={techInfo_list[techInfo_index].category} type="long">{techInfo_list[techInfo_index].category}</CategoryTag>
          <Wrapper>
            <span>{techInfo_list[techInfo_index].author}</span>&middot;
            <span>{dateTimeInKR}</span>
          </Wrapper>
        </header>
        <URLCopyBoxWrapper>
          <h3>공유 URL</h3>
          <ClipboardCopy url={techInfo_list[techInfo_index].url}/>
          <a href={techInfo_list[techInfo_index].url} target="_blank" rel="noreferrer">
            <ExternalLink/>
            공유페이지 새창으로 열기
          </a>
        </URLCopyBoxWrapper>
        <ContentWrapper>
          <h3>공유하고 싶은 이유 or 상세정보</h3>
          <Content>{techInfo_list[techInfo_index].content}</Content>
        </ContentWrapper>
        <ButtonContainer>
          <Button size="small" _onClick={() => {navigate('/edit/' + techInfo_index)}}>수정</Button>
          <Button size="small" bg="#fff" color="#8465e1" border="1px solid #8465e1" _onClick={() => {
            dispatch(deleteTechInfoFB(techInfo_list[techInfo_index].id));
            navigate('/home');
          }}>
            삭제
          </Button>
        </ButtonContainer>
      </Container>
  )
}


export default ViewPage;

const Container = styled.article`
  box-sizing: border-box;
  header {
    padding: 1.875rem 1.25rem;
    background: #f9f9f9;
    box-sizing: border-box;
  }
  h3 {
    margin-bottom: 0.875rem;
    color: #333;
    font-weight: 700;
    line-height: 1.5;
  }
  & > div {
    padding: 0 1.25rem;
    margin-top: 2.25rem;
    box-sizing: border-box;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
`;

const Wrapper = styled.div`
  padding-top: 1.25rem;
  font-size: 0.875rem;
  color: #999999;
`;

const URLCopyBoxWrapper = styled.div`
  overflow: hidden;

  a {
    float: right;
    margin-top: 0.625rem;
    text-decoration: underline;
    color: #fdb674;
    font-size: 0.875rem;
    fill: #fdb674;
  }

  svg {
    vertical-align: bottom;
  }
`;

const ContentWrapper = styled.div`
  h2 {
    clear: right;
  }
`;

const Content = styled.p`
  min-height: 100px;
  max-height: 25vh;
  overflow-y: auto;
  line-height: 20px;
  white-space: pre-wrap;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  button {
    margin-left: 0.25rem;
  }
`;

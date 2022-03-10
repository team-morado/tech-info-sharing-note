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
  if(hour == 12){
    hour12H = hour;
  } else if(hour == 0) {
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
    <div>
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
          <h2>공유 URL</h2>
          <ClipboardCopy url={techInfo_list[techInfo_index].url}/>
          <a href={techInfo_list[techInfo_index].url} target="_blank" rel="noreferrer">
            <ExternalLink/>
            공유페이지 새창으로 열기
          </a>
        </URLCopyBoxWrapper>
        <ContentWrapper>
          <h2>공유하고 싶은 이유 or 상세정보</h2>
          <Content>{techInfo_list[techInfo_index].content}</Content>
        </ContentWrapper>
        <ButtonContainer>
          <Button size="small" _onClick={() => {navigate('/edit/' + techInfo_index)}}>수정</Button>
          <Button size="small" bg="#fff" color="#8465e1" border="#8465e1" _onClick={() => {
            if(window.confirm("정말 삭제하시겠습니까?")) {
              dispatch(deleteTechInfoFB(techInfo_list[techInfo_index].id));
              navigate('/');
            } else {
              return null;
            }
          }}>
            삭제
          </Button>
        </ButtonContainer>
      </Container>
    </div>
  )
}


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
  white-space: pre-wrap;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
`;

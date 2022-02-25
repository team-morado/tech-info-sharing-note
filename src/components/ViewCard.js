import styled from "styled-components"
import ExternalLink from "./Svg";
import { Button } from "../elements";
import ClipboardCopy from "./ClipboardCopy";


const ViewCard = ({ id, author, title, category, url, content, created_date,}) => {
    console.log(created_date)
    const dateTimeInKR = `${new Date(created_date).getFullYear()}년 ${new Date(created_date).getMonth()}월 ${new Date(created_date).getDay()}일`

    return (
        <Container>
            <header>
                <Title>{title}</Title>
                <Category>{category}</Category>
                <Wrapper>
                    <span>{author}</span>&middot;
                    <span>{dateTimeInKR}</span>
                </Wrapper>
            </header>
            <URLCopyBoxWrapper>
                <h2>공유 URL</h2>
                <ClipboardCopy url={url}/>
                <a href={url} target="_blank">
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
                <DeleteButton>삭제</DeleteButton>
            </ButtonContainer>
        </Container>
    )
}

export default ViewCard;

const Container = styled.article`
    padding: 3%;
`

const Title = styled.h1`
    font-size: 1.25rem;
    margin-bottom: 11px;
`

const Category = styled.p`
    display: inline-block;
    font-size: 1rem;
    border: solid 1px #EBE1F6;
    border-radius: 15px;
    padding: 3px 12px;
    margin-bottom: 24px;
    background-color: #EBE1F6;
`

const Wrapper = styled.div`
    font-size: 0.75rem;
    color: #999999;
    margin-bottom: 33px;
`

const URLCopyBoxWrapper = styled.div`
    overflow: hidden;
    h2 {
        margin-bottom: 11px;
        font-weight: 700;
    }
    a {
        color: #FDB674;
        float: right;
        margin-top: 7px;
        text-decoration: underline;
        font-size: 0.875rem;
        fill: #FDB674;
        margin-bottom: 23px;
    }
    svg {
        vertical-align: bottom;
    }
`

const ContentWrapper = styled.div`
    h2 {
        clear: right;
        margin-bottom: 11px;
        font-weight: 700;
    }
`

const Content = styled.p`
    min-height: 100px;
    max-height: 25vh;
    overflow: scroll;
    overflow-x: hidden;
    line-height: 20px;
`

const ButtonContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;
`

const DeleteButton = styled.button`
    border: solid 1px #8465E1;
    background-color: #fff;
    color: #8465E1;
    padding: 5px 23px;
    border-radius: 4px;
    margin-left: 7px;
`


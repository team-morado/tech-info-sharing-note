import React from 'react';
import styled from 'styled-components';


const ListItem = ({ author, title, category, url, content, created_date, }) => {
  return (
    <div>
      <ItemList>
        {/* <hr /> */}
        <Category>
          <div>{category}</div>
        </Category>
        <Contents className='align'>
          <dl>
            <dt className='bold'>{title}</dt>
            <dd>{content}</dd>
          </dl>
        </Contents>
        <Info className='align'>
          <time>{new Date(created_date).toLocaleDateString()}</time>
          <div>{author}</div>
        </Info>
      </ItemList>
    </div>
  );
};

export default ListItem;


const ItemList = styled.div`
  background-color: #F9F9F9;
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  font-size: 14px;

  .bold {
    font-weight: 500;
    font-size: 16px;
  }

`

const Category = styled.div`
  /* outline: 1px red solid; */
  flex: 1 0;
  text-align: center;
  margin: 0 auto;

  div {
    width: 50px;
    background-color: #D7F5F5;
    margin: 0 auto;
    line-height: 50px;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 700;
  }
`

const Contents = styled.div`
/* outline: 1px blue solid; */
  flex: 6;
  margin: 0 1em;
  padding-top: 0.5em;

  dd {
    margin: 0.5em 0 0 0;
    color: #999999;
  }

`
const Info = styled.div`
/* outline: 1px green solid; */
  flex: 2;
  padding-top: 0.5em;
  text-align: right;

  time {
    color: #C4C4C4;
  }
  div {
    margin: 0.5em 0 0 0;
    color: #666666;
  }
`

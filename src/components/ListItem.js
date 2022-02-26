import React from 'react';
import styled from 'styled-components';


const ListItem = ({ author, title, category, url, content, created_date, }) => {
  return (
    <div>
      <ItemList>
        <Category>
          <p className='catType'>{category}</p>
        </Category>
        <Contents>
          <dl>
            <dt className='bold'>{title}</dt>
            <dd className='cont'>{content}</dd>
          </dl>
        </Contents>
        <Info>
          <p className='day'>{new Date(created_date).toLocaleDateString()}</p>
          <p className='writer'>{author}</p>
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
  margin-top: 10px;

  .bold {
    font-weight: 500;
    font-size: 16px;
  }

`

const Category = styled.div`
  flex: 1 0;
  text-align: center;
  margin: 0 auto;

  .catType {
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
  flex: 6;
  margin: 0 1em;
  padding-top: 0.5em;

  .cont {
    margin: 0.5em 0 0 0;
    color: #999999;
  }

`
const Info = styled.div`
  flex: 2;
  padding-top: 0.5em;
  text-align: right;

  .day {
    color: #C4C4C4;
  }
  .writer {
    margin: 0.5em 0 0 0;
    color: #666666;
  }
`

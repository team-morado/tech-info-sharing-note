import React from 'react';
import styled from 'styled-components';
import { CategoryTag } from '../elements';
import {timeForToday} from "../Util/timeForToday";


const ListItem = (props) => {
  const {id, category, title, content, created_date, author, _onClick} = props;

  return (
      <ItemList key={id} onClick={_onClick}>
        <CategoryTag category={category} type="square">
          <p className='catType'>{category}</p>
        </CategoryTag>
        <Contents>
          <dl>
            <dt className='bold'>{title}</dt>
            <dd className='cont'>{content}</dd>
          </dl>
        </Contents>
        <Info>
          <p className='day'>{timeForToday(created_date)}</p>
          <p className='writer'>{author}</p>
        </Info>
      </ItemList>
  );
};

ListItem.defaultProps = {
  _onClick: () => {}
}

export default ListItem;


const ItemList = styled.div`
  background-color: #F9F9F9;
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  font-size: 14px;
  margin: 10px 9px 0;
  border-radius: 10px;
  height: 68px;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
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
    /* margin: 0 auto; */
    line-height: 50px;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 700;
  }
`

const Contents = styled.div`
  flex: 6;
  margin-left: 1em;
  max-height: 40px;
  overflow: hidden;
  white-space: nowrap;
  .cont {
      margin-top: 0.5em;
      color: #999999;
      max-height: 0.875rem;
      text-overflow: ellipsis;
  }

`
const Info = styled.div`
  flex: 2;
  text-align: right;

  .day {
    color: #C4C4C4;
  }
  .writer {
    margin: 0.5em 0 0 0;
    color: #666666;
  }
`

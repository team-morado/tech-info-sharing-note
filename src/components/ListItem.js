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
  display: flex;
  align-items: center;
  width: inherit;
  padding: 1rem;
  margin: 0.625rem 0;
  background-color: #f9f9f9;
  border-radius: 0.625rem;
  font-size: 0.875rem;
  overflow: hidden;
  box-sizing: border-box;
  .bold {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 1rem;
  }
  &:hover {
    cursor: pointer;
  }

`

const Contents = styled.div`
  margin-left: 1em;
  max-height: 40px;
  width: calc(100% - 150px);
  .cont {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-top: 0.5em;
      color: #999999;
      line-height: 1rem;
      max-height: 1rem;
  }

`
const Info = styled.div`
  flex: 1;
  text-align: right;
  .day {
    color: #C4C4C4;
  }
  .writer {
    margin-top: 0.5em;
    color: #666666;
  }
`

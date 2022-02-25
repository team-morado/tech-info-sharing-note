import React from 'react';
import styled from 'styled-components';


const ListItem = ({ author, title, category, url, content, created_date, }) => {
  return (
    <div>
      <ItemList>
        <hr />
        <Category>
          {category}
        </Category>
        <Contents>
          {title}
          {content}
        </Contents>
        <Info>
          {created_date}
          {author}
        </Info>
      </ItemList>
    </div>
  );
};

export default ListItem;


const ItemList = styled.div`
  display: flex;
`

const Category = styled.div`

`

const Contents = styled.div`

`
const Info = styled.div`

`
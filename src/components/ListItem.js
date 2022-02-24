import React from 'react';

const ListItem = ({ id, author, title, category, url, content, created_date, }) => {
  return (
    <div>
      <hr />
      {id}
      {category}
      {title}
      {content}
      {created_date}
      {author}
    </div>
  );
};

export default ListItem;

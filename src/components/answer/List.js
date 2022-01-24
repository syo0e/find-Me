import React from 'react';
import '../../styles/main.scss';

const ListItem = () => {
  return (
    <div>
      <div>
        <span>Q. 오늘 처음으로 시도해본 활동이 있다면?</span>
      </div>
      <span>2022-01-24</span>
    </div>
  );
};

const List = () => {
  return (
    <div className="container">
      <div className="content">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
};

export default List;

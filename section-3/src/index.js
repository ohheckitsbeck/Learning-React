//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//Create a React component
const App = function() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          content="Nice blog post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          avatar={faker.image.avatar()}
          content="So helpful"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          avatar={faker.image.avatar()}
          content="Most dope"
        />
      </ApprovalCard>
    </div>
  );
}

//Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
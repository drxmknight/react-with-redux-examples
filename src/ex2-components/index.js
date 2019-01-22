import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Eduardo" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Nicole" />
            </ApprovalCard><ApprovalCard>
                <CommentDetail author="Marce" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App></App>,
    document.querySelector("#ex2")
);
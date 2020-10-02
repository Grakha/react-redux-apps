import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {

    return (
        <div className="ui container comments">

            <ApprovalCard>
                <h4>Warning!</h4>
                <p>Are you sure you want to add this?</p>
            </ApprovalCard>

            <ApprovalCard>
                < CommentDetail
                    author="Alex"
                    timeAgo="Today 4:30AM"
                    content={faker.lorem.text()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                < CommentDetail
                    author="Serena"
                    timeAgo="Today 8:35AM"
                    content={faker.lorem.text()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                < CommentDetail
                    author="Geka"
                    timeAgo="Today 1:28AM"
                    content={faker.lorem.text()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));
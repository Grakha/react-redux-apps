import React from 'react';
import { connect } from 'react-redux';


class UserHeader extends React.Component {

    render () {
        const { user } = this.props;

        if(!user) {
            return null;
        }

        return (
            <div className="mt-1">
                <div className="font-italic"><ins>{ user.name }</ins></div>
            </div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
    mapStateToProps
)(UserHeader);
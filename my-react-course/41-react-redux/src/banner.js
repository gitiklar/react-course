import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        username: state.username,
    }
}

export default connect(mapStateToProps)(function Banner(props) {
    const { username } = props;
    return (
       <h1> Hi {username} and wellcome to our website </h1>
    )
});
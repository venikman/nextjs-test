import React from 'react';
import PropTypes from 'prop-types';

const user = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    );
};

user.propTypes = {
    age  : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired
};

export default user;

import React from 'react';
import PropTypes from 'prop-types';

const user = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <style jsx>{`
                div {
                    border: 1px solid #eee;
                    box-shadow: 0 2px 20px #ccc;
                    padding: 20px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

user.propTypes = {
    age  : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired
};

export default user;

import React from 'react';

import User from '../../components/user.js';

const authIndexPage = () => {
    return (
        <div>
            <h1>The Auth Index Page</h1>
            <User
                name="Stas"
                age={25}
            />
        </div>
    );
};

export default authIndexPage;

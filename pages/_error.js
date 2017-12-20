import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => {
    return (
        <div>
            <h1>Opps!</h1>
            <p>Try<Link href="/"><a>Auth</a></Link></p>
        </div>
    );
};

export default errorPage;

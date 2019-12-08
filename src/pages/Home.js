import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div id="Home">
            <Helmet>
                <title>LifeSync | Home</title>
            </Helmet>
            <h1>Hello from Home</h1>
            <Link to="/signup">
                <button type="button">signup</button>
            </Link>
        </div>
    );
}

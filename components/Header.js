import React from 'react';

export default function Header() {
    return <header>
        <div className="logo">
            <h1>bullsfirst</h1>
            <div className="subtitle">Calling All Bull Markets</div>
        </div>
        <nav>
            <button><i className="glyphicon glyphicon-star-empty" />Trade</button>
            <button><i className="glyphicon glyphicon-log-in" />Transfer</button>
        </nav>
    </header>
};
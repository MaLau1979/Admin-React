import React from 'react';
import DatabaseCardsCategories from './DatabaseCardsCategories'
import DatabaseCardsDetail from './DatabaseCardsDetail';

function DatabaseCards() {
    return (
        <div className="row">
            <DatabaseCardsDetail />
            <DatabaseCardsCategories />
        </div>
    );
}

export default DatabaseCards;
import React from 'react';
import DatabaseCardsCategories from './DatabaseCardsCategories'
import DatabaseCardsDetail from './DatabaseCardsDetail';
import DatabaseCardsQuantity from './DatabaseCardsQuantity';

var databaseBoxes = [{

    titulo:"Products in Data Base",
    cifra:"135",
    colorDeBorde: "card border-left-primary shadow h-100 py-2",
    icono:"fas fa-clipboard-list fa-2x text-gray-300"
},
{
    
    titulo:"Amount in products",
    cifra:"$46.456",
    colorDeBorde: "card border-left-success shadow h-100 py-2",
    icono:"fas fa-dollar-sign fa-2x text-gray-300"
},
{
    
    titulo:"Users quantity",
    cifra:"38",
    colorDeBorde: "card border-left-warning shadow h-100 py-2",
    icono:"fas fa-user-check fa-2x text-gray-300"
}
]

function DatabaseCards(props) {
    return (
    <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
            <DatabaseCardsQuantity databaseBoxes={databaseBoxes} />
        <div className="row">
            <DatabaseCardsDetail />
            <DatabaseCardsCategories />
        </div>
    </div>
    );
}

export default DatabaseCards;
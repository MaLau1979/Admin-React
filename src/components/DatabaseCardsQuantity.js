import React from 'react';
import PropTypes from 'prop-types';

function DatabaseCardsQuantity(props) {
    return (
    <div className="row">
        { props.databaseBoxes.map((unaBox,i) => 
        (<div key={unaBox+i} className="col-md-4 mb-4">
            <div className={unaBox.colorDeBorde}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{unaBox.titulo} 
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{unaBox.cifra}</div>   
                            <div className="col-auto">
                            <i className={unaBox.icono}></i>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>)
    )}       
</div>  
)
}
      
DatabaseCardsQuantity.propTypes = {
    titulo:PropTypes.string.isRequired,
    colorDeBorde:PropTypes.string.isRequired,
    cifra:PropTypes.string.isRequired,
    icono:PropTypes.string.isRequired
}
DatabaseCardsQuantity.defaultProps = {
    titulo: "Acá va el título",
    colorDeBorde: "red",
    cifra: "0",
    icono: "fas fa-clipboard"
} 


export default DatabaseCardsQuantity;


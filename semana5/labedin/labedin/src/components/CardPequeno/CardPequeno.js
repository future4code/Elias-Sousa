import React from 'react'; //importar o react


function CardPequeno(props) { // chamando a funcao com props
    return (
        
        <section className="localizar">
            
            <div className="blocos">
            <img src={ props.iconeGmail }/>
            <p>{ props.email } </p>
            </div>
            <div className="blocos">
            <img src={ props.IconeLocal }/>
                <p>{ props.endereco }</p>
            </div>
            </section>
    );
}

export default CardPequeno;
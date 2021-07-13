import React from 'react'; //importar o react


function CardPequeno(props) { // chamando a funcao com props
    return (

        <section className="localizar">
            <div>
            <h3>Email:</h3>
            <p>{ props.email } </p>
            </div>
            <div>
            <h3>Endereço:</h3>
                <p>{ props.endereco }</p>
            </div>
            </section>
    );
}

export default CardPequeno;
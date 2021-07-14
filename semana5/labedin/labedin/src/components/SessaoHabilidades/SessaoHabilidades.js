import React from 'react'; //importar o react


function SessaoHabilidades(props) { 
    return (
        
        
    
        
        <section className="UltimaSessao">
            

            <div>
                <h5>{ props.habilidade}</h5>
                <p>{ props.resumo}</p>
            </div>



            </section>
    );
}

export default SessaoHabilidades;
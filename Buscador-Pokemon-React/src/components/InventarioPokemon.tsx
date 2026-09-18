import React  from 'react';
import { usePokemon } from '../context/PokemonContext'

export const InventarioPokemon: React.FC = () =>{


    const { entrenadorActivo, eliminarPokemon , actualizarFavorito , mochilaActual } = usePokemon();
    

        if(!entrenadorActivo){
            return( <div>
                <h3>No hay entrenadores</h3>
                <p>Por favor asigne un <strong>entrenador activo o </strong> regristee un entrenador</p>
            </div>
        );
    }
            
  

return(
<div className='banner-sesion'>
    <header>
        <h2> MOCHILA de {entrenadorActivo?.nombreCompleto}</h2>
    </header>

    <div className="grid-mochila">
      {mochilaActual.length > 0 ?(mochilaActual.map((poke, index)=> (
        <div key={poke.id} className={`tarjeta-item ${poke.esFavorito ? 'tarjeta-favorita' : ''}`}>
          <span>
            #{index + 1} de {mochilaActual.length
            
            }
          </span>

          <img src={poke.image} />
          <h4>{poke.name}</h4>
          <p> {poke.type}</p>


            <div className="panel-botones">
            <button className={`btn-favorito ${poke.esFavorito ? 'fav-activo' : ''}`}
            onClick={() => actualizarFavorito(poke.id)} >
                {poke.esFavorito ? '🌟⭐Favorito' : '⭐ Marcar'}
            </button>
            <button type="button" className='btn-eliminar'
            onClick={() =>eliminarPokemon(poke.id)}>
                Liberar o Soltar
            </button>
          </div>

        </div>
      )) 
    )
    : (
        <div>
            <p>Tu mochila esta vacia actualmente.</p>
            <p>Vaya y Captura al pokemon</p>
        </div>
    )
}

</div>
</div>
);
};

        
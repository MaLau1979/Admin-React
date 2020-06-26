import React from 'react';

function TableRows(props) {
    return (
        <tbody>
        {props.filas.map((unaFila,i) =>
        (<tr key={unaFila + i} >
			<td>{unaFila.nombre}</td>
			<td>{unaFila.descripcion}</td>
			<td>{unaFila.precio}</td>
			<td>
				<ul>
                    {unaFila.categorias.map((e) => 
					<li>{e}</li>
                    )}
				</ul>
			</td>
			<td>
				<ul>
                {unaFila.colores.map((e) =>
                    (<li><span className={e.class}>{e.texto}
                    </span>
                    </li>)
                )}
				</ul>
			</td>
			<td>{unaFila.stock}</td>
            </tr>)
        )}
       </tbody>
									
    );
}

export default TableRows;
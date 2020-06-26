import React from 'react';
import TableRows from './TableRows';

var filas = [{
    nombre:"Tiger Nixon",
    descripcion:"System Architect",
    precio:"$320.800",
    categorias:["Category 01","Category 02","Category 03"],
    colores:[{
        class:"text-danger",
        texto:"Red"},
        {class: "text-primary",
        texto:"Blue"},       
        {class: "text-success",
        texto:"Green"}],
    stock:"245"
},
{   
    nombre:"Jane Doe",
    descripcion:"Full-Stack Developer",
    precio:"320.800",
    categorias:["Category 01","Category 02","Category 03"],
    colores:[{
        class:"text-danger",
        texto:"Red"},
        {class: "text-primary",
        texto:"Blue"},       
        {class: "text-success",
        texto:"Green"}],
    stock:"245"
}
]

function Table() {
    return (
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
										<th>Categories</th>
										<th>Colors</th>
										<th>Stock</th>
									</tr>
								</thead>
							    <tfoot>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
										<th>Categories</th>
										<th>Colors</th>
										<th>Stock</th>
									</tr>
								</tfoot>
								
									< TableRows filas={filas} />
				
							</table>
						</div>
					</div>
				</div>
              
 );
}

export default Table;
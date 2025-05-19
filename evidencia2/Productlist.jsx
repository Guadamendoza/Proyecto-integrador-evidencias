import React from 'react';

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map(p => (
        <div
          key={p.id}
          className="border p-4 m-2 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold mb-2">{p.title}</h2>
          <p className="text-gray-700 font-medium">${p.price}</p>
        </div>
      ))}
      {/* Renderización condicional por si no se encuentran productos */}
      {products.length === 0 && <div>No se encontraron productos</div>}
    </div>
  );
}

export default ProductList;

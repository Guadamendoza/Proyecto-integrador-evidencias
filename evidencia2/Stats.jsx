function Stats({ maxProduct, minProduct, longitud }) {
    return (
      <div className="bg-blue-50 p-4 mt-6 rounded-lg shadow-md transition-opacity duration-100">
        <h2 className="text-xl font-bold mb-2 text-blue-800">Estadísticas</h2>
        <p>Precio máximo: ${maxProduct}</p>
        <p>Precio mínimo: ${minProduct}</p>
        <p>Productos con más de 20 caracteres: {longitud}</p>
      </div>
    );
  }
  
  export default Stats;
  
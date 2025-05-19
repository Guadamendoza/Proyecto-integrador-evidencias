import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
// importando componentes propios 
import Stats from './components/Stats.jsx';
import ProductList from './components/Productlist.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [term, setTerm] = useState('');

  // llamada a la API y lo que quiero hacer con la respuesta o la acción que se realice después de tener los productos
  useEffect(() => { 
    axios.get("https://dummyjson.com/products")
         .then(res => { setProducts(res.data.products) }); // Toda la data va a ser alojada en el estado
  }, []);

  // Filtrar los productos 
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(term.toLowerCase())
  );

  // constantes para estadísticas 
  const maxProduct = Math.max(...filteredProducts.map(p => p.price)); // map va a devolver una lista con los precios y los tres puntos va a separar los precios, luego el max va a devolver el precio mayor
  const minProduct = Math.min(...filteredProducts.map(p => p.price));
  const longitud = filteredProducts.filter(p => p.title.length > 20).length;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Lista de productos</h1>

      {/* input para buscar el producto y onchange para que se actualice el estado de búsqueda cuando se hacen modificaciones en los caracteres */}
      <input 
        type="text" 
        placeholder="Buscar producto" 
        value={term} 
        onChange={(e) => setTerm(e.target.value)} 
        className="mb-4 p-2 w-full border rounded"
      />

      {/* componente propio para mostrar los productos */}
      <ProductList products={filteredProducts} />

      {/* componente propio para mostrar las estadísticas */}
      <Stats maxProduct={maxProduct} minProduct={minProduct} longitud={longitud} />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // funcion actualizadora
  const [products, setProducts] = useState([])
  // llamada a la API y lo que quiero hacer con la respuesta o la accion que se realice despues de tener los productos
  useEffect(()=>{ 
    axios.get("https://dummyjson.com/products").then(res => { setProducts(res.data.products) }) // Toda la data va a ser alojada en el estado
  })
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Lista de productos</h1>
      
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
      </div>
    </div>
  )
}

export default App

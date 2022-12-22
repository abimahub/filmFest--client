import {useState, useEffect} from 'react'
import Catalog from './components/catalog';

function App() {

  const [abiCatalog, setabiCatalog] = useState([]);
  useEffect(() => {getCatalog();},[]);

  const getCatalog = () => {
    fetch('http://127.0.0.1:3001/catalog')
    .then(res => res.json())
    .then(
      (data) => {
        console.log ("data: ",data );
  
        setabiCatalog (data );
      },
      (error) => {
        console.log(error);
        setabiCatalog(null);
      }
    );
  };

 if (!abiCatalog) return <div>No Record Found</div>;
  return (
    <Catalog abiCatalog={abiCatalog} />
  )
 
}  

export default App;
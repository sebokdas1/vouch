import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import 'sweetalert2/dist/sweetalert2.css'
import './App.css';
import Login from './pages/Login/Login';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(false)
  },[loading])

  if(loading){
    return(
      <div className="screen_center">
          <Spinner animation="border" variant="secondary" />
      </div>
    )
  }

  return (
    <div className="App">
      <Login loading={loading} setLoading={setLoading} />
    </div>
  );
}

export default App;

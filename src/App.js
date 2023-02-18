import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Subheader from './Component/Subheader';
import Filters from './Component/Filters';
import Collections from './Component/Collections';
import Modal from './Component/Modal';
function App() {
  // this state is for handling modal
  const [openModal, setOpenModal] = useState(false)

  // making state in order to showe filter data
  const [deliveryfilters,setdeliveryfilters] =useState(false)
  const [dineoutfilters,setdinoutfilters] =useState(false)
  

  return (
    <>
      {
        openModal && <Modal setOpenModal={ setOpenModal} />
      }
      <Header setOpenModal={ setOpenModal} />
      <Subheader setdeliveryfilters={setdeliveryfilters} setdinoutfilters={setdinoutfilters} />
      <Filters setdeliveryfilters={setdeliveryfilters}
      deliveryfilters={deliveryfilters}
      dineoutfilters={dineoutfilters}
      setdinoutfilters={setdinoutfilters}
      
      
      />
      <Collections/>
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Subheader from './Component/Subheader';
import Filters from './Component/Filters';
import Collections from './Component/Collections';
import Modal from './Component/Modal';
import SignupModal from './Component/SignupModal';
function App() {
  // this state is for handling modal
  const [openModal, setOpenModal] = useState(false)
  const [openSignupModal, setOpenSignupModal] = useState(false)

  // making state in order to showe filter data
  const [deliveryfilters, setdeliveryfilters] = useState(false)
  const [dineoutfilters, setdinoutfilters] = useState(false)
  const [nightlifefilters, setnightlifefilters] = useState(false)



  return (
    <>
      {
        openModal && <Modal setOpenModal={setOpenModal} />
      }
      {
        openSignupModal && <SignupModal setOpenSignupModal={setOpenSignupModal} />
      }
      <Header setOpenModal={setOpenModal} setOpenSignupModal={setOpenSignupModal} />
      <Subheader setdeliveryfilters={setdeliveryfilters} setdinoutfilters={setdinoutfilters} setnightlifefilters={setnightlifefilters} />
      <Filters setdeliveryfilters={setdeliveryfilters}
        deliveryfilters={deliveryfilters}
        dineoutfilters={dineoutfilters}
        setdinoutfilters={setdinoutfilters}
        nightlifefilters={nightlifefilters}
      />
      <Collections />
    </>
  );
}

export default App;

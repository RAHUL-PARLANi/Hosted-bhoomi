import React, { useEffect, useState } from 'react'
import {Routes,Route ,BrowserRouter } from 'react-router-dom'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateFloodLight from './components/adminPanel/addfloodlight';
import AdminHomepage from './components/adminPanel/AdminHomepage';
import ShowFLS from './components/adminPanel/showfloodlights';
import  EditFL  from './components/adminPanel/editfloodlights';
import Editstreetlight from './components/adminPanel/editstreetlight';
import CreateStreetLight from './components/adminPanel/addStreetLight';
import ShowSLS from './components/adminPanel/showStreetlight';
import CreateConcealedLight from './components/adminPanel/addCL';
import ShowCLs from './components/adminPanel/showCLs';
import EditCls from './components/adminPanel/editCls';
import CreatePanelLight from './components/adminPanel/addPanelLight';
import ShowPLS from './components/adminPanel/showPls';
import EditPl from './components/adminPanel/editPl';
import CreateWallLight from './components/adminPanel/addWalllight';
import ShowWLS from './components/adminPanel/showWalllight';
import EditWalllights from './components/adminPanel/editWalllights';
import Flinfo from './components/MainSite/productdetailedpage';
import Fllist from './components/MainSite/fllist';
import Homepage from './components/MainSite/homepage';
import PLinfo  from './components/MainSite/pldp';
import  WLinfo  from './components/MainSite/wlinfo';
import SLinfo  from './components/MainSite/slinfo';
import Clinfo from './components/MainSite/clinfo';
import { CartProvider, useCart } from "react-use-cart";
import Cart from './components/MainSite/cart';
import Checkout from './components/MainSite/checkout';
import OrderList from './components/adminPanel/Orderlist';
import Trackorder from './components/MainSite/trackorder';
import AOS from "aos";
import "aos/dist/aos.css";
import WLlist from './components/MainSite/wllist';
import SLlist from './components/MainSite/sllist';
import Pllist from './components/MainSite/pllist';
import Cllist from './components/MainSite/cllist';
library.add(fas)
  
function App() {
const [index,setIndex]=useState(1);
const [name,setName]=useState('');

useEffect(() => {
 AOS.init();
 setTimeout(() => {
  document.getElementById('Notidication').style.display='none'
 }, 1000);
 setTimeout(() => {
  document.getElementById('Notidication-update').style.display='none'
 }, 1000)
 setTimeout(() => {
  document.getElementById('Notidication-delete').style.display='none'
 }, 1000)

}, [index])

  
  return (
     <div className="App">
    <div id='Notidication'>{name} Added to Cart Successfully!</div>
    <div id='Notidication-update'>{name} Updated Successfully!</div>
    <div id='Notidication-delete'>{name} Removed Successfully!</div>
    
    <CartProvider 
      id="Bhoomi"
      onItemAdd={(item) => {document.getElementById('Notidication').style.display='block'; setIndex(index+1); setName(item.name) }}
      onItemUpdate={(item) => {document.getElementById('Notidication-update').style.display='block'; setIndex(index+1);  setName(item.name)}}
      onItemRemove={(item) => {document.getElementById('Notidication-delete').style.display='block'; setIndex(index+1);  setName(item.name)}}>
        <BrowserRouter>
         <Routes>
             <Route path='/' element={<Homepage/>}/>
             <Route path='/checkout' element={<Checkout/>}/>
             <Route path='/cart' element={<Cart/>}/>
             <Route path='/panellights/' element={<Pllist title={'PANEL LIGHTS'} category={['PC','3 IN 1','AL','OTHER']}/>}/>
             <Route path='/walllights/' element={<WLlist title={'WALL LIGHTS'} category={['AL','AL/CYL','SQ','TRIM R','OTHER']}/>}/>
             <Route path='/streetlights/' element={<SLlist title={'STREET LIGHTS'} category={['FM','GM','LNS','GM-S','DOB','OTHER']}/>}/>
             <Route path='/floodlights/' element={<Fllist title={'FLOOD LIGHTS'} category={['BC','GM','LNS','DOB','SHN','OTHER']}/>}/>
             <Route path='/concealedlights/' element={<Cllist  title={'CONCEALED LIGHTS'} category={['PC','AL','PC 3 IN 1','AL 3 IN 1','OTHER']}/>}/>
             <Route path='/floodlight/:id' element={<Flinfo/>}/>
             <Route path='/panellight/:id' element={<PLinfo/>}/>
             <Route path='/streetlight/:id' element={<SLinfo/>}/>
             <Route path='/walllight/:id' element={<WLinfo/>}/>
             <Route path='/concealedlight/:id' element={<Clinfo/>}/>
             <Route path='/admin/' element={<AdminHomepage/>}/>
             <Route path='/admin/addFL' element={<CreateFloodLight/>}/>
             <Route path='/admin/showFLs' element={<ShowFLS/>} />
             <Route path='/admin/editfls/:id' element={<EditFL/>} />
             <Route path='/admin/addSL' element={<CreateStreetLight/>}/>
             <Route path='/admin/showSLs' element={<ShowSLS/>} />
             <Route path='/admin/editsls/:id' element={<Editstreetlight/>} />
             <Route path='/admin/addCL' element={<CreateConcealedLight/>}/>
             <Route path='/admin/showCLs' element={<ShowCLs/>} />
             <Route path='/admin/editcls/:id' element={<EditCls/>} />
             <Route path='/admin/addPl' element={<CreatePanelLight/>}/>
             <Route path='/admin/showPLs' element={<ShowPLS/>} />
             <Route path='/admin/editPls/:id' element={<EditPl/>} />
             <Route path='/admin/addWL' element={<CreateWallLight/>}/>
             <Route path='/admin/showWLs' element={<ShowWLS/>} />
             <Route path='/admin/editWls/:id' element={<EditWalllights/>} />
             <Route path='/admin/order' element={<OrderList/>} />
             <Route path='/trackorder' element={<Trackorder/>} />
         </Routes>
      </BrowserRouter>
      </CartProvider>
  </div>
);
}
export default App;
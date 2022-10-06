import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from './NavBarAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BoardGame = (props) => (
    <tr>
               <td className="text-xs font-weight-bold"><button className="edit-button"><Link style={{color:'inherit',textDecoration:"none"}} to={"/admin/editcls/"+props.bg._id} ><FontAwesomeIcon icon="fa-solid fa-pen" /> Edit</Link></button>  <button className="delete-button" onClick={() => {props.deleteBGS(props.bg._id) }}><FontAwesomeIcon icon="fa-solid fa-trash" /> Delete</button></td>
               <td className="text-xs font-weight-bold">{props.bg.productProductCode}</td>
               <td className="text-xs font-weight-bold">{props.bg.productModel}</td>
               <td className="text-xs font-weight-bold">{props.bg.productWatt}</td>
               <td className="text-xs font-weight-bold">{props.bg.productLength}</td>
               <td className="text-xs font-weight-bold">{props.bg.productWidth}</td>
               <td className="text-xs font-weight-bold">{props.bg.productHight}</td>
               <td className="text-xs font-weight-bold">{props.bg.productCutOut}</td>
               <td className="text-xs font-weight-bold">{props.bg.productRupees}</td>
               <td className="text-xs font-weight-bold">{props.bg.productHomepage}</td>
               <td className="text-xs font-weight-bold">{props.bg.productSerialNumber}</td>
               <td className="text-xs font-weight-bold">{props.bg.productAvailable}</td>
               
    </tr>
)
class ShowCLs extends Component {

    constructor(props) {
                super(props);
                this.state = {
                    bgs: []
                    
                }
                
        
                this.deleteBGS = this.deleteBGS.bind(this);
            }
        

  componentDidMount(){
    axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/cl/')
                .then(res => {
                    this.setState({ bgs: res.data })
                })
                .catch(error => console.log(error));
 if (!$.fn.DataTable.isDataTable("#myTable")) {
            $(document).ready(function () {
              setTimeout(function () {
                $("#table").DataTable({
                  pagingType: "full_numbers",
                  pageLength: 20,
                  processing: true,
                  retrieve:true,
                  dom: "Bfrtip",
                  select: {
                    style: "single",
                  },
      
                  buttons: [
                    {
                      extend: "pageLength",
                      className: "edit-button",
                    },
                    {
                      extend: "copy",
                      className: "edit-button",
                    },
                    {
                      extend: "csv",
                      className: "edit-button",
                    },
                    {
                      extend: "print",
                      customize: function (win) {
                        $(win.document.body).css("font-size", "10pt");
                        $(win.document.body)
                          .find("table")
                          .addClass("compact")
                          .css("font-size", "inherit");
                      },
                      className: "edit-button",
                    },
                  ],
      
  //                fnRowCallback: function (
  //                  nRow,
  //                  aData,
  //                  iDisplayIndex,
  //                  iDisplayIndexFull
  //                ) {
  //                  var index = iDisplayIndexFull + 1;
  //                  $("td:first", nRow).html(index);
   //                 return nRow;
    //              },
      
                  lengthMenu: [
                    [10, 20, 30, 50, -1],
                    [10, 20, 30, 50, "All"],
                  ],
 //                 columnDefs: [
 //                   {
 //                     targets: 0,
 //                     render: function (data, type, row, meta) {
 //                       return type === "export" ? meta.row + 1 : data;
 //                     },
 //                   },
 //                 ],
                });
              }, 2500);
            });
          }
} 
deleteBGS(id) {
            axios.delete('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/cl/' +id)
                .then(res => console.log(res.data));
    
            this.setState({ bgs: this.state.bgs.filter(el => el._id !== id)})
        }
    
        bgsList() {
            
            return this.state.bgs.map(bgs => {
                return <BoardGame bg={bgs} deleteBGS={this.deleteBGS} key={bgs._id} />
            })
        }
    


  render(){
  return(<><Navbar/>
  <div class="container-fluid">
  <div className='Title-homepage-Table'>Concealed Light Products</div>
         <div class="table-responsive">
       <table id="table" className="table align-items-center justify-content-center mb-0">
           <thead>
               <tr>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">ACTIONS:</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">PRODUCT CODE:</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">MODEL:</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">WATT :</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">LENGTH :</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">WIDTH :</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">HIGHT :</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">CUTOUT:</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">M.R.P :</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">HOMEPAGE :</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">SERIAL NUMBER :</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">AVAILABLE STATUS :</th>

</tr>
           </thead>

           <tbody>
                   {this.bgsList()}
           </tbody>
       </table>
           </div>
           </div></>
)
}
}

export default ShowCLs;
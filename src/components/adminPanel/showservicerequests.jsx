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
import axios from "axios";
import Navbar from './NavBarAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BoardGame = (props) => (
    <tr>
        <td className="text-xs font-weight-bold"><button className="delete-button" onClick={() => {props.deleteBGS(props.bg._id) }}><FontAwesomeIcon icon="fa-solid fa-trash" />Delete</button></td>
        <td className="text-xs font-weight-bold">{props.bg.Name}</td>
        <td className="text-xs font-weight-bold">{props.bg.Address}</td>
        <td className="text-xs font-weight-bold">{props.bg.No}</td>
        <td className="text-xs font-weight-bold">{props.bg.Description}</td>
    </tr>
)
class ShowServiceRequests extends Component {

    constructor(props) {
                super(props);
                this.state = {
                    bgs: []
                    
                }
                this.deleteBGS = this.deleteBGS.bind(this);
            }
        

  componentDidMount(){
    axios.get('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/service/')
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
      
      
                  lengthMenu: [
                    [10, 20, 30, 50, -1],
                    [10, 20, 30, 50, "All"],
                  ],
                });
              }, 2500);
            });
          }
} 
deleteBGS(id) {
            axios.delete('https://bejewelled-kleicha-3163f4.netlify.app/.netlify/functions/api/service/' +id)
                .then(res => console.log(res.data));
    
            this.setState({ bgs: this.state.bgs.filter(el => el._id !== id)})
        }
    
        bgsList() {
            
            return this.state.bgs.map(bgs => {
                return <BoardGame bg={bgs} deleteBGS={this.deleteBGS} key={bgs._id} />
            })
        }
    


  render(){
  return(<>
  <div class="container-fluid" style={{'paddingLeft':'0px','marginLeft':'-10px'}}>
  <div className='Title-homepage-Table'>Service Requests</div>
         <div class="table-responsive">
       <table id="table" className="table align-items-center justify-content-center mb-0">
           <thead>
              <tr>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">ACTIONS:</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Customer Name :</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Customer Address :</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Customer Number :</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Description :</th>
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

export default ShowServiceRequests;
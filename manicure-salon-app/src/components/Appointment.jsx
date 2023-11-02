export default function Appointment() {
    return (
        <div className="appointment">
         <div className="container">
            <div className="row">
               <div className="col-md-12 ">
                  <div className="titlepage text_align_center">
                     <h2>Make Appointment</h2>
                     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                  </div>
               </div>
               <div className="col-md-12">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-6 ">
                           <input className="form_control" placeholder="Your name" type="type" name=" Name" autoComplete="off"/> 
                        </div>
                        <div className="col-md-6">
                           <input className="form_control" placeholder="Email" type="type" name="Email" autoComplete="off" /> 
                        </div>
                        <div className="col-md-6">
                           <input className="form_control" placeholder="Phone Number" type="type" name="Phone Number" autoComplete="off"/>                          
                        </div>
                        <div className="col-md-6">
                           <input className="form_control" placeholder="Select Massage spa" type="type" name="Select" autoComplete="off"/>                          
                        </div>
                        <div className="col-md-6 ">
                           <input className="form_control" placeholder="Time" type="type" name=" Time" autoComplete="off"/> 
                        </div>
                        <div className="col-md-6">
                           <input type="text" className="form_control" id="my_date_picker" placeholder="Select Date" autoComplete="off"/>
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" placeholder="Message" type="type" defaultValue="Write a message" name="message" autoComplete="off"></textarea>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send Now</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
    )
}
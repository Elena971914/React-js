export default function Pricing() {
    return(
    <div className="priceing">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage text_align_center">
                     <h2>Our Priceing </h2>
                     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="our_priceing text_align_center">
                           <div className="our_pri">
                              <h3>Regular Price</h3>
                              <span>$<strong>50</strong></span>
                              <p>sed do eiusmod <br/>tempor incididunt ut <br/>labore et dolore<br/> magna aliqua. Utenim <br/> ad minim aliquip</p>
                           </div>
                           <a className="read_more" href="javascript:void(0)">Read More</a>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="our_priceing text_align_center">
                           <div className="our_pri">
                              <h3>Special Price</h3>
                              <span>$<strong>100</strong></span>
                              <p>sed do eiusmod <br/>tempor incididunt ut <br/>labore et dolore<br/> magna aliqua. Utenim <br/> ad minim aliquip
                              </p>
                           </div>
                           <a className="read_more" href="javascript:void(0)">Read More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
     
      )
}
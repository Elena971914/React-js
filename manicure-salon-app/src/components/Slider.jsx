export default function Slider() {
    return (
    <div className="slider_main">
   <div id="banner1" className="carousel slide">
      <ol className="carousel-indicators">
         <li data-target="#banner1" data-slide-to="0" className="active"></li>
         <li data-target="#banner1" data-slide-to="1"></li>
         <li data-target="#banner1" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
         <div className="carousel-item active">
            <div className="container">
               <div className="carousel-caption relative">
                  <div className="row d_flex">
                     <div className="col-md-5">
                        <div className="creative">
                           <h1>Spa <br/>Center </h1>
                           <p>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                           <a className="read_more" href="Javascript:void(0)">Contact us</a>
                           <a className="read_more" href="Javascript:void(0)">Read More</a>
                        </div>
                     </div>
                     <div className="col-md-7">
                        <div className="row mar_right">
                           <div className="col-md-6">
                              <div className="agency">
                                 <figure><img src="images/img1.png" alt="#"/></figure>
                                 <div className="play_icon">
                                    <a className="play-btn" href="javascript:void(0)"><img src="images/play_icon.png"/></a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="agency">
                                 <figure><img src="images/img2.png" alt="#"/></figure>
                                 <div className="play_icon">
                                    <a className="play-btn" href="javascript:void(0)"><img src="images/play_icon.png"/></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="carousel-item">
            <div className="container">
               <div className="carousel-caption relative">
                  <div className="row d_flex">
                     <div className="col-md-5">
                        <div className="creative">
                           <h1>Spa <br/>Center </h1>
                           <p>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                           <a className="read_more" href="Javascript:void(0)">Contact us</a>
                           <a className="read_more" href="Javascript:void(0)">Read More</a>
                        </div>
                     </div>
                     <div className="col-md-7">
                        <div className="row mar_right">
                           <div className="col-md-6">
                              <div className="agency">
                                 <figure><img src="images/img1.png" alt="#"/></figure>
                                 <div className="play_icon">
                                    <a className="play-btn" href="javascript:void(0)"><img src="images/play_icon.png"/></a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="agency">
                                 <figure><img src="images/img2.png" alt="#"/></figure>
                                 <div className="play_icon">
                                    <a className="play-btn" href="javascript:void(0)"><img src="images/play_icon.png"/></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="carousel-item">
            <div className="container">
               <div className="carousel-caption relative">
                  <div className="row d_flex">
                     <div className="col-md-5">
                        <div className="creative">
                           <h1>Spa <br/>Center </h1>
                           <p>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                           <a className="read_more" href="Javascript:void(0)">Contact us</a>
                           <a className="read_more" href="Javascript:void(0)">Read More</a>
                        </div>
                     </div>
                     <div className="col-md-7">
                        <div className="row mar_right">
                           <div className="col-md-6">
                              <div className="agency">
                                 <figure><img src="images/img1.png" alt="#"/></figure>
                                 <div className="play_icon">
                                    <a className="play-btn" href="javascript:void(0)"><img src="images/play_icon.png"/></a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="agency">
                                 <figure><img src="images/img2.png" alt="#"/></figure>
                                 <div className="play_icon">
                                    <a className="play-btn" href="javascript:void(0)"><img src="images/play_icon.png"/></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <a className="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
      <i className="fa fa-angle-left" aria-hidden="true"></i>
      <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#banner1" role="button" data-slide="next">
      <i className="fa fa-angle-right" aria-hidden="true"></i>
      <span className="sr-only">Next</span>
      </a>
   </div>
</div>
)
}
export default function Customers() {
    return (
        <div className="customers">
         <div className="clients_bg">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="titlepage text_align_center">
                        <h2>What is Says Customers</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="myCarousel" className="carousel slide clients_banner" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
               <li data-target="#myCarousel" data-slide-to="1"></li>
               <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="carousel-caption relative">
                        <div className="row d_flex">
                           <div className="col-md-2 col-sm-8">
                              <div className="pro_file">
                                 <i><img src="images/test2.png" alt="#"/></i>
                                 <h4>English.Many</h4>
                                 <span>normal distribution</span>
                              </div>
                           </div>
                           <div className="col-md-10">
                              <div className="test_box text_align_left">
                                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going </p>
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
                           <div className="col-md-2 col-sm-8">
                              <div className="pro_file">
                                 <i><img src="images/test2.png" alt="#"/></i>
                                 <h4>English.Many</h4>
                                 <span>normal distribution</span>
                              </div>
                           </div>
                           <div className="col-md-10">
                              <div className="test_box text_align_left">
                                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going </p>
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
                           <div className="col-md-2 col-sm-8">
                              <div className="pro_file">
                                 <i><img src="images/test2.png" alt="#"/></i>
                                 <h4>English.Many</h4>
                                 <span>normal distribution</span>
                              </div>
                           </div>
                           <div className="col-md-10">
                              <div className="test_box text_align_left">
                                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
            </a>
         </div>
      </div>
    )
}
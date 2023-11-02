export default function Blog() {
    return(
        <div className="blog">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage text_align_center ">
                     <h2>Latest Blog</h2>
                     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                  </div>
               </div>
            </div>
            <div className="row d_flex">
               <div className=" col-md-4">
                  <div className="latest">
                     <figure><img src="images/blog1.jpg" alt="#"/></figure>
                     <span>16 March</span>
                     <div className="nostrud">
                        <h3>Quis Nostrud </h3>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        <a className="read_more" href="blog.html">Read More</a>
                     </div>
                  </div>
               </div>
               <div className=" col-md-4">
                  <div className="latest">
                     <figure><img src="images/blog2.jpg" alt="#"/></figure>
                     <span className="yellow">17 March</span>
                     <div className="nostrud">
                        <h3>Veniam, Quis </h3>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        <a className="read_more" href="blog.html">Read More</a>
                     </div>
                  </div>
               </div>
               <div className=" col-md-4">
                  <div className="latest">
                     <figure><img src="images/blog3.jpg" alt="#"/></figure>
                     <span>18 March</span>
                     <div className="nostrud">
                        <h3>Tempor incididunt </h3>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        <a className="read_more" href="blog.html">Read More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}
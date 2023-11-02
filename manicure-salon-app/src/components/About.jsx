export default function About() {
    return(
        <div className="about">
         <div className="container_width">
            <div className="row d_flex grig">
               <div className="col-md-6">
                  <div className="about_img">
                     <figure><img src="images/about_img.jpg" alt="#"/>
                     </figure>
                  </div>
               </div>
               <div className="col-md-6 order">
                  <div className="titlepage text_align_left">
                     <h2>About Our Center</h2>
                     <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                     <a className="read_more" href="about.html">Read More</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}
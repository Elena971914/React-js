export default function Header() {
    return(
        <header className="header-area">
            <div className="container">
               <div className="row d_flex">
                  <div className=" col-md-3 col-sm-3">
                     <div className="logo">
                        <a href="index.html">Bliss</a>
                     </div>
                  </div>
                  <div className="col-md-9 col-sm-9">
                     <div className="navbar-area">
                        <nav className="site-navbar">
                           <ul>
                              <li><a className="active" href="index.html">Home</a></li>
                              <li><a href="about.html">About</a></li>
                              <li><a href="service.html">Service</a></li>
                              <li><a href="blog.html">Blog</a></li>
                              <li><a href="contact.html">Contact us</a></li>
                              <li className="d_none"><a href="Javascript:void(0)"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                              <li className="d_none"><a href="Javascript:void(0)"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                           </ul>
                           <button className="nav-toggler">
                           <span></span>
                           </button>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </header>
    )
}
import MenuItem from "./Menu/MenuItem";
import menuList from "../assets/menu";
import MenuNavItem from "./Menu/MenuNavItem";
import menuNavItems from "../assets/menu-nav"

export default function Menu() {
    return(
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>
                <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        < MenuNavItem menuNavItemData={menuNavItems[0]} />
                        < MenuNavItem menuNavItemData={menuNavItems[1]} />
                        < MenuNavItem menuNavItemData={menuNavItems[2]} />
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <MenuItem meal={menuList[0]}/>
                                <MenuItem meal={menuList[1]}/>
                                <MenuItem meal={menuList[2]}/>
                                <MenuItem meal={menuList[3]}/>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <MenuItem meal={menuList[4]}/>
                                <MenuItem meal={menuList[5]}/>
                                <MenuItem meal={menuList[6]}/>
                                <MenuItem meal={menuList[7]}/>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <MenuItem meal={menuList[8]}/>
                                <MenuItem meal={menuList[9]}/>
                                <MenuItem meal={menuList[10]}/>
                                <MenuItem meal={menuList[11]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
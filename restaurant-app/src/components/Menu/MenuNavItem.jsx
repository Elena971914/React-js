export default function MenuNavItem(props) {
    return(
        <li className="nav-item">
            <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
            <i className={props.menuNavItemData.icon}></i>
                <div className="ps-3">
                    <small className="text-body">{props.menuNavItemData.titleSmall}</small>
                    <h6 className="mt-n1 mb-0">{props.menuNavItemData.titleBold}</h6>
                </div>
            </a>
        </li>
    )
}
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          FIN-FLOW
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Analytics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Reports
              </a>
            </li>
            <li className="nav-item ms-lg-3">
              <div className="d-flex align-items-center bg-secondary bg-opacity-25 p-1 px-3 rounded-pill text-white">
                <small className="me-2">Muhammad Ahmed</small>
                <div
                  className="bg-primary rounded-circle shadow-sm"
                  style={{ width: "32px", height: "32px" }}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const FirstCardHero = () => {
  return (
    <div className="col-lg-8">
      <div
        className="card border-0 text-white p-4 shadow-sm h-100 position-relative overflow-hidden"
        style={{ backgroundColor: "#0061ff", borderRadius: "15px" }}
      >
        <div style={{ zIndex: 1, position: "relative" }}>
          <h6 className="text-uppercase opacity-75 fw-bold small">
            Current Portfolio Value
          </h6>
          <h1 className="display-4 fw-bold mb-4">$142,530.85</h1>
          <div className="d-flex gap-3">
            <button
              className="btn btn-light fw-bold px-4 py-2"
              style={{ borderRadius: "8px" }}
            >
              + Add Funds
            </button>
            <button
              className="btn btn-outline-light px-4 py-2"
              style={{
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              Withdraw
            </button>
          </div>
        </div>

        <div
          className="position-absolute translate-middle-y end-0 top-50 bg-white opacity-10 rounded-circle"
          style={{ width: "250px", height: "250px", marginRight: "-80px" }}
        ></div>
      </div>
    </div>
  );
};

export default FirstCardHero;

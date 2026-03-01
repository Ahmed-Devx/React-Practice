const SecondCardHero = () => {
  return (
    <div className="col-lg-4">
      <div
        className="card border-0 shadow-sm p-4 h-100 border-start border-warning border-5"
        style={{ borderRadius: "15px" }}
      >
        <h5 className="fw-bold mb-4">Financial Score</h5>
        <div className="text-center py-2">
          <h2 className="fw-bold mb-1" style={{ color: "#ffc107" }}>
            845 / 900
          </h2>
          <p className="text-muted small">Your credit health is excellent!</p>

          <div
            className="progress mt-4"
            style={{ height: "8px", backgroundColor: "#f0f0f0" }}
          >
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "85%", borderRadius: "10px" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCardHero;

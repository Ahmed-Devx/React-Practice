const SavingsGoals = () => {
  return (
    <div className="col-md-4">
      <div className="card border-0 shadow-sm p-4 h-100">
        <h6 className="fw-bold mb-4">Savings Goals</h6>

        <div className="mb-4">
          <div className="d-flex justify-content-between mb-2 small">
            <span className="text-muted">New House</span>
            <span className="fw-bold">$12,000 / $50,000</span>
          </div>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar bg-primary"
              style={{ width: "24%" }}
            ></div>
          </div>
        </div>

        <div className="mb-2">
          <div className="d-flex justify-content-between mb-2 small">
            <span className="text-muted">Tesla Model 3</span>
            <span className="fw-bold">$8,000 / $45,000</span>
          </div>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar bg-success"
              style={{ width: "18%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsGoals;

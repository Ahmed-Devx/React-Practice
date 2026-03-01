const SpendingTrends = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

  const heights = [80, 130, 100, 190, 60, 150, 110, 175];

  return (
    <div className="col-lg-7">
      <div className="card border-0 shadow-sm p-4 h-100">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold mb-0">Spending Trends</h5>
          <div className="btn-group shadow-sm">
            <button className="btn btn-sm btn-outline-secondary px-3">
              Weekly
            </button>
            <button className="btn btn-sm btn-primary px-3">Monthly</button>
          </div>
        </div>

        <div
          className="d-flex align-items-end justify-content-between mt-5"
          style={{ height: "220px", borderBottom: "1px solid #eee" }}
        >
          {months.map((month, index) => (
            <div key={month} className="text-center" style={{ width: "10%" }}>
              <div
                style={{
                  height: `${heights[index]}px`,
                  backgroundColor: "#0d6efd",
                  borderRadius: "20px",
                  marginBottom: "10px",
                  transition: "height 0.4s ease-in-out",
                  width: "100%",
                }}
                className={month === "Mar" ? "opacity-50" : ""}
              ></div>
              <span className="text-muted small fw-bold d-block mt-2">
                {month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpendingTrends;

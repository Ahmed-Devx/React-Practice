const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      title: "Supermarket Shopping",
      time: "2 hours ago",
      amount: "-$85.00",
      icon: "🛒",
      type: "expense",
    },
    {
      id: 2,
      title: "Upwork Payout",
      time: "Yesterday",
      amount: "+$1,200",
      icon: "💻",
      type: "income",
    },
    {
      id: 3,
      title: "Bank Transfer",
      time: "Jan 28, 2026",
      amount: "-$500.00",
      icon: "🏦",
      type: "expense",
    },
  ];

  return (
    <div className="col-lg-5">
      <div className="card border-0 shadow-sm p-4 h-100 d-flex flex-column">
        <h5 className="fw-bold mb-4">Recent Activity</h5>

        <div className="flex-grow-1">
          {activities.map((item) => (
            <div key={item.id} className="d-flex align-items-center mb-4 pb-2">
              <div
                className="bg-light p-2 rounded-3 me-3 fs-4 shadow-sm"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.icon}
              </div>
              <div className="flex-grow-1">
                <h6 className="mb-0 fw-bold small">{item.title}</h6>
                <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  {item.time}
                </p>
              </div>
              <div
                className={`fw-bold ${item.type === "income" ? "text-success" : "text-danger"}`}
              >
                {item.amount}
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-light w-100 mt-auto fw-bold py-2 text-dark opacity-75 shadow-sm">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;

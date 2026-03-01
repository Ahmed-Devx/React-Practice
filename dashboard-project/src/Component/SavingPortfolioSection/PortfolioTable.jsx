const PortfolioTable = () => {
  const assets = [
    {
      name: "Bitcoin (BTC)",
      cat: "Crypto",
      alloc: "35%",
      perf: "+12.4%",
      color: "text-success",
    },
    {
      name: "Tesla (TSLA)",
      cat: "Stocks",
      alloc: "20%",
      perf: "-2.1%",
      color: "text-danger",
    },
  ];

  return (
    <div className="col-md-8">
      <div className="card border-0 shadow-sm p-4 h-100">
        <h6 className="fw-bold mb-4">Portfolio Diversification</h6>
        <div className="table-responsive">
          <table
            className="table align-middle mb-0"
            style={{ minWidth: "500px" }}
          >
            <thead className="text-muted small">
              <tr className="border-0">
                <th className="border-0 px-0" style={{ width: "40%" }}>
                  Asset Name
                </th>
                <th className="border-0" style={{ width: "20%" }}>
                  Category
                </th>
                <th className="border-0" style={{ width: "20%" }}>
                  Allocation
                </th>
                <th className="border-0 text-end px-0" style={{ width: "20%" }}>
                  Performance
                </th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, index) => (
                <tr key={index}>
                  <td className="px-0">
                    <strong>{asset.name}</strong>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark fw-normal">
                      {asset.cat}
                    </span>
                  </td>
                  <td>{asset.alloc}</td>
                  <td className={`text-end px-0 fw-bold ${asset.color}`}>
                    {asset.perf}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTable;

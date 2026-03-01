const ListCardsHero = ({ title, amount, icon, iconBg }) => {
  return (
    <div className="col-md-3">
      <div className="card border-0 shadow-sm p-3">
        <div className="d-flex align-items-center">
          <div
            className={`p-2 rounded me-3`}
            style={{ backgroundColor: iconBg }}
          >
            <span>{icon}</span>
          </div>
          <div>
            <p className="text-muted small mb-0">{title}</p>
            <h5 className="fw-bold mb-0">{amount}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListCardsHero;

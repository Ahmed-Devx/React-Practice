const PremiumCard = () => {
  return (
    <div className="card border-0 bg-dark text-white p-5 shadow text-center">
      <h2 className="fw-bold">Upgrade to Premium Plan</h2>
      <p className="opacity-75">
        Get access to AI-powered financial predictions and unlimited reports.
      </p>
      <div className="mt-3">
        <button className="btn btn-primary px-5 py-2 fw-bold">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default PremiumCard;

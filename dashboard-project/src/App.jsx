import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import FirstCardHero from "./Component/HeroSection/FirstCardHero";
import SecondCardHero from "./Component/HeroSection/SecondCardHero";
import ListCardsHero from "./Component/HeroSection/ListCardsHero";
import SpendingTrends from "./Component/AnalyticSection/SpendingTrends";
import RecentActivity from "./Component/AnalyticSection/RecentActivity";
import SavingsGoals from "./Component/SavingPortfolioSection/SavingsGoals";
import PortfolioTable from "./Component/SavingPortfolioSection/PortfolioTable";
import PremiumCard from "./Component/PremiumPlanSection/PremiumCard";
import Footer from "./Component/Footer/Footer";
const App = () => {
  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <div className="container pt-5">
        <div className="row g-4 mb-4">
          <FirstCardHero />
          <SecondCardHero />
        </div>
        <div className="row g-4 pt-2">
          <ListCardsHero
            title="Total Income"
            amount="$8,240"
            icon="💰"
            iconBg="#e8f5e9"
          />
          <ListCardsHero
            title="Expenses"
            amount="$2,100"
            icon="📉"
            iconBg="#ffebee"
          />
          <ListCardsHero
            title="Tax Reserve"
            amount="$1,450"
            icon="🏦"
            iconBg="#e3f2fd"
          />
          <ListCardsHero
            title="Assets"
            amount="$120k+"
            icon="💼"
            iconBg="#f3e5f5"
          />
        </div>
        <div className="row g-4 mt-3">
          <SpendingTrends />
          <RecentActivity />
        </div>
        <div className="row g-4 mt-3 mb-5">
          <SavingsGoals />
          <PortfolioTable />
        </div>
        <PremiumCard />
        <Footer />
      </div>
    </div>
  );
};

export default App;

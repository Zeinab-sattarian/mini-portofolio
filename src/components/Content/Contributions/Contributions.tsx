import "../../../style.css";
import ContributionChart from "./ContributionChart";

const Contributions = () => {
  return (
    <section className="contribution">
      <h2>
        My <span className="colored">Contributions</span>
      </h2>
      <div className="divider ltr"></div>
      <ContributionChart />
    </section>
  );
};
export default Contributions;

// how can I make he theme take effect from the dark or light function in navbar?

import GitHubCalendar from "react-github-calendar";
import "../../../style.css";

const ContributionChart = () => {
  return (
    <div className="wrapper">
      <GitHubCalendar colorScheme="dark" username="zeinab-sattarian" />
    </div>
  );
};
export default ContributionChart;

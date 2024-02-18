import BudgetOverview from "components/budget/views/budget-overview/BudgetOverview";
import strings from "locals/en";
import { Heading } from "@radix-ui/themes";

const {
  global: { dashboard },
} = strings;

const Dashboard = () => {
  return (
    <div>
      <Heading as="h1">{dashboard}</Heading>
      <BudgetOverview />
    </div>
  );
};

export default Dashboard;

import BudgetWidget from "components/budget/views/budget-widget/BudgetWidget";
import strings from "locals/en";
import { Heading } from "@radix-ui/themes";

const Dashboard = () => {
  const {
    global: { dashboard },
  } = strings;

  return (
    <div>
      <Heading as="h1">{dashboard}</Heading>
      <BudgetWidget />
    </div>
  );
};

export default Dashboard;

import CategoriesWidget from "components/shared/organisms/categories-widget/CategoriesWidget";
import strings from "locals/en";
import { budgetEntries } from "mocks/budgetEntries";

const {
  budget: { budget },
} = strings;

const BudgetOverview = () => {
  // @TODO - make api call to get budget information

  return <CategoriesWidget title={budget} entries={budgetEntries} />;
};

export default BudgetOverview;

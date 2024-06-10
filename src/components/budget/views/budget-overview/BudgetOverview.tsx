import { useGetBudgetEntriesQuery } from "services/base";
import CategoriesWidget from "components/shared/organisms/categories-widget/CategoriesWidget";
import strings from "locals/en";

const {
  budget: { budget },
} = strings;

const BudgetOverview = () => {
  const { data, error, isLoading } = useGetBudgetEntriesQuery();

  return (
    <div>
      {error ? (
        <p>Oops there was an error!</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <CategoriesWidget title={budget} entries={data} />
      ) : null}
    </div>
  );
};

export default BudgetOverview;

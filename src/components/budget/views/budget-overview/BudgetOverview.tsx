import { useGetBudgetEntriesQuery } from "services/base";
import CategoriesWidget from "components/shared/organisms/categories-widget/CategoriesWidget";
import { Card, Spinner, Skeleton } from "@radix-ui/themes";
import strings from "locals/en";

const {
  budget: { budget },
} = strings;

const BudgetOverview = () => {
  const { data, error, isLoading } = useGetBudgetEntriesQuery();

  if (error) {
    return (
      <Card>
        <p>Oops, there was an error!</p>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Skeleton width="100%">
        <Spinner />
      </Skeleton>
    );
  }

  return (
    <>
      {!data ? (
        <Card>
          <p>No budget entries to show</p>
        </Card>
      ) : (
        <CategoriesWidget title={budget} entries={data} />
      )}
    </>
  );
};

export default BudgetOverview;

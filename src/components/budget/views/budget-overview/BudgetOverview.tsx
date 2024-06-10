import { useState, useEffect } from "react";
import CategoriesWidget from "components/shared/organisms/categories-widget/CategoriesWidget";
import { Entry } from "models/entry";
import strings from "locals/en";

const {
  budget: { budget },
} = strings;

const BudgetOverview = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  // @TODO - make api call to get budget information
  useEffect(() => {
    fetch('/budgetEntries')
      .then((res) => res.json())
      .then((res) => setEntries(res));
  }, []);

  return <CategoriesWidget title={budget} entries={entries} />;
};

export default BudgetOverview;

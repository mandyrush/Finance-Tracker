import EntriesWidget from "components/shared/organisms/entries-widget/EntriesWidget";
import strings from "locals/en";
import { EntryType, EntryFrequency } from "models/entry";
import budgetEntries from "mocks/budgetEntries.json";

const BudgetWidget = () => {
  const {
    budget: { budget },
  } = strings;

  // @TODO - make api call to get budget information
  const entries = budgetEntries.map((entry) => ({
    ...entry,
    entryType: entry.entryType as EntryType,
    frequency: entry.frequency as EntryFrequency,
  }));

  return <EntriesWidget title={budget} entries={entries} />;
};

export default BudgetWidget;

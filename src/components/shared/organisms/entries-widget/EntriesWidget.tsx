import { Entry as EntryModel } from "models/entry";
import { capitalizeFirstLetter } from "utilities/helpers";
import strings from "locals/en";
import Entry from "components/shared/atoms/entry/Entry";
import { Heading } from "@radix-ui/themes";
import {
  WidgetContainer,
  WidgetHeader,
  WidgetBody,
  WidgetFooter,
} from "./styles";

interface CategoryTotal {
  category: string;
  total: number;
}

interface EntriesWidgetProps {
  title: string;
  entries: EntryModel[];
}

const EntriesWidget = ({ title, entries }: EntriesWidgetProps) => {
  const {
    global: { total },
  } = strings;

  const categoryTotals = entries.reduce((accumulator, current) => {
    const categoryIndex = accumulator.findIndex(
      (entry) => entry.category === current.category
    );
    if (categoryIndex === -1) {
      accumulator.push({ category: current.category, total: current.amount });
    } else {
      accumulator[categoryIndex].total += current.amount;
    }
    return accumulator;
  }, [] as CategoryTotal[]);

  const budgetTotal = categoryTotals.reduce((accumulator, current) => {
    accumulator += current.total;
    return accumulator;
  }, 0);

  return (
    <WidgetContainer>
      <WidgetHeader>
        <Heading as="h2">{title}</Heading>
      </WidgetHeader>
      <WidgetBody>
        {categoryTotals.map((categoryTotal) => (
          <Entry
            key={categoryTotal.category}
            label={capitalizeFirstLetter(categoryTotal.category)}
            value={categoryTotal.total}
          />
        ))}
      </WidgetBody>
      <WidgetFooter>
        <Entry label={total} value={budgetTotal} />
      </WidgetFooter>
    </WidgetContainer>
  );
};

export default EntriesWidget;

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

const {
  global: { total: totalLabel },
} = strings;

export interface WidgetEntry {
  id: number;
  label: string;
  value: number;
}

interface CategoriesWidgetProps {
  title: string;
  entries: EntryModel[];
}

const CategoriesWidget = ({ title, entries }: CategoriesWidgetProps) => {
  const categoryEntries = entries.reduce((accumulator, current) => {
    const categoryIndex = accumulator.findIndex(
      (category) => category.label === current.category
    );
    if (categoryIndex === -1) {
      accumulator.push({
        id: current.id,
        label: current.category,
        value: current.amount,
      });
    } else {
      accumulator[categoryIndex].value += current.amount;
    }
    return accumulator;
  }, [] as WidgetEntry[]);

  const categoriesTotal = categoryEntries.reduce((accumulator, current) => {
    accumulator += current.value;
    return accumulator;
  }, 0);

  return (
    <WidgetContainer>
      <WidgetHeader>
        <Heading as="h2">{title}</Heading>
      </WidgetHeader>
      <WidgetBody>
        {categoryEntries.map((entry) => (
          <Entry
            key={entry.id}
            label={capitalizeFirstLetter(entry.label)}
            value={entry.value}
          />
        ))}
      </WidgetBody>
      <WidgetFooter>
        <Entry label={totalLabel} value={categoriesTotal} />
      </WidgetFooter>
    </WidgetContainer>
  );
};

export default CategoriesWidget;

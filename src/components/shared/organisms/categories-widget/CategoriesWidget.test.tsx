import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CategoriesWidget from "./CategoriesWidget";
import { Entry, EntryType, EntryFrequency } from "models/entry";

const widgetTitle = "Budget";
const budgetEntries: Entry[] = [
  {
    id: 2001,
    name: "Car",
    amount: 150.0,
    category: "car",
    entryType: EntryType.Budget,
    frequency: EntryFrequency.Monthly,
    dueDates: "1st",
    paymentMethod: "Credit Card 1111",
  },
  {
    id: 2002,
    name: "Car Payment",
    amount: 340.0,
    category: "car",
    entryType: EntryType.Budget,
    frequency: EntryFrequency.Monthly,
    dueDates: "21st",
    paymentMethod: "Credit Card 2222",
  },
  {
    id: 2003,
    name: "Internet",
    amount: 75.0,
    category: "technology",
    entryType: EntryType.Budget,
    frequency: EntryFrequency.Monthly,
    dueDates: "3rd",
    paymentMethod: "Credit Card 3333",
  },
  {
    id: 2004,
    name: "Water",
    amount: 70.0,
    category: "home",
    entryType: EntryType.Budget,
    frequency: EntryFrequency.Monthly,
    dueDates: "5th",
    paymentMethod: "Credit Card 5555",
  },
  {
    id: 2005,
    name: "Electric",
    amount: 80.0,
    category: "home",
    entryType: EntryType.Budget,
    frequency: EntryFrequency.Monthly,
    dueDates: "31st",
    paymentMethod: "Credit Card 7777",
  },
];

const setup = () => {
  render(
    <MemoryRouter>
      <CategoriesWidget title={widgetTitle} entries={budgetEntries} />
    </MemoryRouter>
  );
};

it("renders widget title", () => {
  setup();
  expect(screen.getByText(widgetTitle)).toBeInTheDocument();
});

it("renders widget entries", () => {
  setup();
  expect(budgetEntries.length).toBe(5);

  const carTotal = screen.getByRole("heading", { name: "Car $490" });
  expect(carTotal).toBeInTheDocument();

  const technologyTotal = screen.getByRole("heading", {
    name: "Technology $75",
  });
  expect(technologyTotal).toBeInTheDocument();

  const homeTotal = screen.getByRole("heading", { name: "Home $150" });
  expect(homeTotal).toBeInTheDocument();
});

it("renders total of all categories", () => {
  setup();
  const categoryTotals = screen.getByRole("heading", { name: "Total $715" });
  expect(categoryTotals).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import CategoriesWidget from "./CategoriesWidget";
import { budgetEntries } from "mocks/budgetEntries";

const widgetTitle = "Budget";

const setup = () => {
  render(<CategoriesWidget title={widgetTitle} entries={budgetEntries} />);
};

test("renders widget title", () => {
  setup();
  expect(screen.getByText(widgetTitle)).toBeInTheDocument();
});

test("renders widget entries", () => {
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

test("renders total of all categories", () => {
  setup();
  const categoryTotals = screen.getByRole("heading", { name: "Total $715" });
  expect(categoryTotals).toBeInTheDocument();
});

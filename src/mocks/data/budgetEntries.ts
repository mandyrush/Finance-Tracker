import { EntryType, EntryFrequency } from "models/entry";

export const budgetEntries = [
  [
    2001,
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
  ],
  [
    2002,
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
  ],
  [
    2003,
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
  ],
  [
    2004,
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
  ],
  [
    2005,
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
  ],
];
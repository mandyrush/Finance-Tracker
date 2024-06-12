import { useGetBudgetEntriesQuery } from "services/base";
import { Entry } from "models/entry";
import { capitalizeFirstLetter } from "utilities/helpers";
import {
  Container,
  Heading,
  Table,
  Card,
  Spinner,
  Skeleton,
  Strong,
} from "@radix-ui/themes";
import strings from "locals/en";
import { TableContainer } from "./styles";

const {
  global: { actions, amount, grandTotal, total },
  budget: { budgetDetail, item },
} = strings;

const BudgetDetail = () => {
  const { data = [], error, isLoading } = useGetBudgetEntriesQuery();

  const sumEntriesTotal = (entries: Entry[]) => {
    return entries?.reduce(
      (accumulator, current) => accumulator + current.amount,
      0
    );
  };

  const sortEntries = (entries: Entry[]) => {
    return entries.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
  };

  const createCategoryTableRows = (category: string) => {
    const categoryEntries = data.filter((item) => item.category === category);
    const sortedEntries = sortEntries(categoryEntries);
    const entriesTotal = sumEntriesTotal(sortedEntries);

    return (
      <>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell colSpan={3}>
              {capitalizeFirstLetter(category)}
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sortedEntries?.map(({ id, name, amount }) => (
            <Table.Row key={id}>
              <Table.RowHeaderCell>{name}</Table.RowHeaderCell>
              <Table.Cell>${amount}</Table.Cell>
              <Table.Cell>{actions}</Table.Cell>
            </Table.Row>
          ))}
          <Table.Row>
            <Table.RowHeaderCell>
              <Strong>{total}</Strong>
            </Table.RowHeaderCell>
            <Table.Cell>
              <Strong>{`$${entriesTotal}`}</Strong>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    );
  };

  const categoryArray = data?.map?.(({ category }) => category);
  const resultCategories = Array.from(new Set(categoryArray));

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
    <Container>
      <Heading as="h1">{budgetDetail}</Heading>
      {!data.length ? (
        <div>No Results</div>
      ) : (
        <div>
          <TableContainer>
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>{item}</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>{amount}</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>{actions}</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              {resultCategories.map((category) =>
                createCategoryTableRows(category)
              )}
              <Table.Row>
                <Table.RowHeaderCell>
                  <Strong>{grandTotal}</Strong>
                </Table.RowHeaderCell>
                <Table.Cell>
                  <Strong>{`$${sumEntriesTotal(data)}`}</Strong>
                </Table.Cell>
              </Table.Row>
            </Table.Root>
          </TableContainer>
        </div>
      )}
    </Container>
  );
};

export default BudgetDetail;

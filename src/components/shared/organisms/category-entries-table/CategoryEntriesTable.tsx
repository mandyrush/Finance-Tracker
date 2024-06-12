import { Entry } from 'models/entry';
import CategoryEntryRows from 'components/shared/molecules/category-entry-rows/CategoryEntryRows';
import { Table, Strong } from '@radix-ui/themes';
import strings from 'locals/en';
import { TableContainer } from './styles';

const {
    global: { actions, amount, grandTotal },
    budget: { item },
} = strings;

interface CategoryEntriesTableProps {
    tableData: Entry[];
}

const CategoryEntriesTable = ({ tableData }: CategoryEntriesTableProps) => {
    const categoryEntries = (category: string) => {
        return tableData.filter((entry) => entry.category === category);
    };

    const sumEntries = (entries: Entry[]) => {
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

    const categoryArray = tableData?.map?.(({ category }) => category);

    const categories = Array.from(new Set(categoryArray));

    const sortedCategories = categories.sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
    );

    return (
        <TableContainer>
            <Table.Root variant="surface">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>{item}</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>
                            {amount}
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>
                            {actions}
                        </Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {sortedCategories.map((category) => (
                        <CategoryEntryRows
                            key={category}
                            entries={categoryEntries(category)}
                            category={category}
                            sumEntries={sumEntries}
                            sortEntries={sortEntries}
                        />
                    ))}

                    <Table.Row>
                        <Table.RowHeaderCell>
                            <Strong>{grandTotal}</Strong>
                        </Table.RowHeaderCell>
                        <Table.Cell>
                            <Strong>{`$${sumEntries(tableData)}`}</Strong>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </TableContainer>
    );
};

export default CategoryEntriesTable;

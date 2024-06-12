import { Entry } from 'models/entry';
import { capitalizeFirstLetter, formatToCurrency } from 'utilities/helpers';
import strings from 'locals/en';
import { Table, Strong } from '@radix-ui/themes';
import { RowHeader } from './styles';

const {
    global: { actions, total },
} = strings;

interface CategoryEntryRowsProps {
    entries: Entry[];
    category: string;
    sumEntries: (entries: Entry[]) => string;
    sortEntries: (entries: Entry[]) => Entry[];
}

const CategoryEntryRows = ({
    entries,
    category,
    sumEntries,
    sortEntries,
}: CategoryEntryRowsProps) => {
    const sortedEntries = sortEntries(entries);

    return (
        <>
            <Table.Row>
                <RowHeader colSpan={3}>
                    <Strong>{capitalizeFirstLetter(category)}</Strong>
                </RowHeader>
            </Table.Row>

            {sortedEntries?.map(({ id, name, amount }) => (
                <Table.Row key={id}>
                    <Table.RowHeaderCell>{name}</Table.RowHeaderCell>
                    <Table.Cell justify="end">
                        {formatToCurrency(amount)}
                    </Table.Cell>
                    <Table.Cell>{actions}</Table.Cell>
                </Table.Row>
            ))}

            <Table.Row>
                <Table.RowHeaderCell>
                    <Strong>{total}</Strong>
                </Table.RowHeaderCell>
                <Table.Cell justify="end">
                    <Strong>{sumEntries(sortedEntries)}</Strong>
                </Table.Cell>
            </Table.Row>
        </>
    );
};

export default CategoryEntryRows;

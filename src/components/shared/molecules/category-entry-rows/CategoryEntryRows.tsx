import { Entry } from 'models/entry';
import { capitalizeFirstLetter } from 'utilities/helpers';
import strings from 'locals/en';
import { Table, Strong } from '@radix-ui/themes';

const {
    global: { actions, total },
} = strings;

interface CategoryEntryRowsProps {
    entries: Entry[];
    category: string;
    sumEntries: (entries: Entry[]) => number;
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
                <Table.RowHeaderCell colSpan={3}>
                    {capitalizeFirstLetter(category)}
                </Table.RowHeaderCell>
            </Table.Row>

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
                <Table.Cell colSpan={2}>
                    <Strong>{`$${sumEntries(sortedEntries)}`}</Strong>
                </Table.Cell>
            </Table.Row>
        </>
    );
};

export default CategoryEntryRows;

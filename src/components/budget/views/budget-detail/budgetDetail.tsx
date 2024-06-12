import { useGetBudgetEntriesQuery } from 'services/base';
import CategoryEntriesTable from 'components/shared/organisms/category-entries-table/CategoryEntriesTable';
import EmptyState from 'components/shared/atoms/empty-state/EmptyState';
import { Container, Heading, Card, Skeleton } from '@radix-ui/themes';
import strings from 'locals/en';

const {
    budget: { budgetDetail },
} = strings;

const BudgetDetail = () => {
    const { data = [], error, isLoading } = useGetBudgetEntriesQuery();

    if (error) {
        return (
            <Card>
                <p>Oops, there was an error!</p>
            </Card>
        );
    }

    if (isLoading) {
        return <Skeleton width="100%" />;
    }

    return (
        <Container>
            <Heading as="h1">{budgetDetail}</Heading>
            {!data.length ? (
                <EmptyState message="No Results" />
            ) : (
                <CategoryEntriesTable tableData={data} />
            )}
        </Container>
    );
};

export default BudgetDetail;

import { useGetBudgetEntriesQuery } from 'services/base';
import CategoryEntriesTable from 'components/shared/organisms/category-entries-table/CategoryEntriesTable';
import ExpenseForm from 'components/budget/organisms/expense-form/ExpenseForm';
import CategoryForm from 'components/budget/organisms/category-form/CategoryForm';
import PaymentMethodForm from 'components/budget/organisms/payment-method-form/PaymentMethodForm';
import FrequencyForm from 'components/budget/organisms/frequency-form/FrequencyForm';
import EmptyState from 'components/shared/atoms/empty-state/EmptyState';
import {
    Container,
    Flex,
    Box,
    Heading,
    Card,
    Skeleton,
} from '@radix-ui/themes';
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
        <Container pt="6" pb="6">
            <Heading as="h1">{budgetDetail}</Heading>
            {!data.length ? (
                <EmptyState message="No Results" />
            ) : (
                <Flex gap="6">
                    <Box width="100%">
                        <CategoryEntriesTable tableData={data} />
                    </Box>
                    <Box width="450px">
                        <Flex direction="column" gap="6">
                            <Box>
                                <ExpenseForm />
                            </Box>

                            <Box>
                                <CategoryForm />
                            </Box>

                            <Box>
                                <PaymentMethodForm />
                            </Box>

                            <Box>
                                <FrequencyForm />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            )}
        </Container>
    );
};

export default BudgetDetail;

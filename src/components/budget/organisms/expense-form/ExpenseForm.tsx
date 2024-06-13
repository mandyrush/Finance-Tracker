import { Formik, Form } from 'formik';
import { object, string, number } from 'yup';
import { EntryFrequency } from 'models/entry';
import { useCreateBudgetEntryMutation } from 'services/base';
import FormLabel from 'components/shared/atoms/form-label/FormLabel';
import { FormError } from 'components/shared/atoms/form-label/styles';
import {
    Card,
    Heading,
    Flex,
    TextField,
    Select,
    Button,
} from '@radix-ui/themes';

interface FormValues {
    name: string;
    amount: number;
    category: string;
    frequency: EntryFrequency;
    dueDate: string;
    paymentMethod: string;
}

const ExpenseForm = () => {
    const [createEntry, { isLoading, isError }] =
        useCreateBudgetEntryMutation();

    const initialValues: FormValues = {
        name: '',
        amount: 0.0,
        category: '',
        frequency: EntryFrequency.Monthly,
        dueDate: '',
        paymentMethod: '',
    };

    const validationSchema = object({
        name: string()
            .max(30, 'Must be 30 characters or less')
            .required('Please enter a name for this expense'),
        amount: number()
            .typeError('Must be a number')
            .required('Please enter an amount'),
        category: string().required('Please select a category'),
        frequency: string().required('Please select a frequency'),
        dueDate: string().required('Please enter a due date'),
        paymentMethod: string().required('Please select a payment method'),
    });

    return (
        <Card>
            <Heading as="h2" size="3">
                Add Expense
            </Heading>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                    await createEntry(values);
                    resetForm();
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    setFieldValue,
                    handleChange,
                    handleBlur,
                }) => (
                    <Form>
                        <Flex direction="column" gap="3" maxWidth="300px">
                            <Flex direction="column">
                                <FormLabel labelFor="name">Name</FormLabel>
                                <TextField.Root
                                    radius="large"
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.name && errors.name ? (
                                    <FormError>{errors.name}</FormError>
                                ) : null}
                            </Flex>

                            <Flex direction="column">
                                <FormLabel labelFor="amount">Amount</FormLabel>
                                <TextField.Root
                                    radius="large"
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    value={values.amount}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.amount && errors.amount ? (
                                    <FormError>{errors.amount}</FormError>
                                ) : null}
                            </Flex>

                            <Flex direction="column">
                                <FormLabel labelFor="category">
                                    Category
                                </FormLabel>
                                <Select.Root
                                    size="2"
                                    name="category"
                                    value={values.category}
                                    onValueChange={(value) => {
                                        setFieldValue('category', value, true);
                                    }}
                                >
                                    <Select.Trigger
                                        radius="large"
                                        placeholder="Select"
                                    />
                                    <Select.Content>
                                        <Select.Item value="car">
                                            Car
                                        </Select.Item>
                                        <Select.Item value="home">
                                            Home
                                        </Select.Item>
                                        <Select.Item value="technology">
                                            Technology
                                        </Select.Item>
                                    </Select.Content>
                                </Select.Root>
                                {touched.category && errors.category ? (
                                    <FormError>{errors.category}</FormError>
                                ) : null}
                            </Flex>

                            <Flex direction="column">
                                <FormLabel labelFor="frequency">
                                    Frequency
                                </FormLabel>
                                <Select.Root
                                    size="2"
                                    name="frequency"
                                    value={values.frequency}
                                    onValueChange={(value) => {
                                        setFieldValue('frequency', value, true);
                                    }}
                                >
                                    <Select.Trigger
                                        radius="large"
                                        placeholder="Select"
                                    />
                                    <Select.Content>
                                        <Select.Item value="monthly">
                                            Monthly
                                        </Select.Item>
                                        <Select.Item value="semi-annual">
                                            Semi-Annual
                                        </Select.Item>
                                        <Select.Item value="yearly">
                                            Yearly
                                        </Select.Item>
                                    </Select.Content>
                                </Select.Root>
                                {touched.frequency && errors.frequency ? (
                                    <FormError>{errors.frequency}</FormError>
                                ) : null}
                            </Flex>

                            <Flex direction="column">
                                <FormLabel labelFor="dueDate">
                                    Due Date
                                </FormLabel>
                                <TextField.Root
                                    radius="large"
                                    id="dueDate"
                                    name="dueDate"
                                    type="text"
                                    value={values.dueDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.dueDate && errors.dueDate ? (
                                    <FormError>{errors.dueDate}</FormError>
                                ) : null}
                            </Flex>

                            <Flex direction="column">
                                <FormLabel labelFor="paymentMethod">
                                    Payment Method
                                </FormLabel>
                                <Select.Root
                                    size="2"
                                    name="paymentMethod"
                                    value={values.paymentMethod}
                                    onValueChange={(value) => {
                                        setFieldValue(
                                            'paymentMethod',
                                            value,
                                            true
                                        );
                                    }}
                                >
                                    <Select.Trigger
                                        radius="large"
                                        placeholder="Select"
                                    />
                                    <Select.Content>
                                        <Select.Item value="cc-1111">
                                            CC - 1111
                                        </Select.Item>
                                        <Select.Item value="cc-2222">
                                            CC - 2222
                                        </Select.Item>
                                        <Select.Item value="cc-3333">
                                            CC - 3333
                                        </Select.Item>
                                    </Select.Content>
                                </Select.Root>
                                {touched.paymentMethod &&
                                errors.paymentMethod ? (
                                    <FormError>
                                        {errors.paymentMethod}
                                    </FormError>
                                ) : null}
                            </Flex>

                            <Button
                                type="submit"
                                variant="solid"
                                radius="large"
                                color="grass"
                            >
                                Save
                            </Button>
                        </Flex>
                    </Form>
                )}
            </Formik>
        </Card>
    );
};

export default ExpenseForm;

import {
    Card,
    Heading,
    Flex,
    TextField,
    Select,
    Button,
} from '@radix-ui/themes';

const ExpenseForm = () => {
    return (
        <Card>
            <Heading as="h2" size="3">
                Add Expense
            </Heading>
            <Flex direction="column" gap="3" maxWidth="300px">
                <TextField.Root placeholder="Name" radius="large" />
                <TextField.Root placeholder="Amount" radius="large" />

                <Select.Root size="2">
                    <Select.Trigger radius="large" placeholder="Category" />
                    <Select.Content>
                        <Select.Item value="car">Car</Select.Item>
                        <Select.Item value="car">Home</Select.Item>
                        <Select.Item value="technology">Technology</Select.Item>
                    </Select.Content>
                </Select.Root>

                <Select.Root size="2">
                    <Select.Trigger radius="large" placeholder="Frequency" />
                    <Select.Content>
                        <Select.Item value="monthly">Monthly</Select.Item>
                        <Select.Item value="semi-annual">
                            Semi-Annual
                        </Select.Item>
                        <Select.Item value="yearly">Yearly</Select.Item>
                    </Select.Content>
                </Select.Root>

                <TextField.Root placeholder="Due Date" radius="large" />

                <Select.Root size="2">
                    <Select.Trigger
                        radius="large"
                        placeholder="Payment Method"
                    />
                    <Select.Content>
                        <Select.Item value="cc-1111">CC - 1111</Select.Item>
                        <Select.Item value="cc-2222">CC - 2222</Select.Item>
                        <Select.Item value="cc-3333">CC - 3333</Select.Item>
                    </Select.Content>
                </Select.Root>

                <Button variant="solid" radius="large" color="grass">
                    Save
                </Button>
            </Flex>
        </Card>
    );
};

export default ExpenseForm;

import { Card, Heading, Text } from '@radix-ui/themes';

interface EmptyStateProps {
    message: string;
    description?: string;
}

const EmptyState = ({ message, description }: EmptyStateProps) => {
    return (
        <Card>
            <Heading as="h3" size="3" align="center">
                {message}
            </Heading>
            <Text as="p" size="2" align="center">
                {description}
            </Text>
        </Card>
    );
};

export default EmptyState;

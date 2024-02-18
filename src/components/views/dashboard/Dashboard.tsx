import BudgetOverview from "components/budget/views/budget-overview/BudgetOverview";
import strings from "locals/en";
import { Grid, Flex, Box, Heading } from "@radix-ui/themes";
import { MainContainer } from "./styles";

const {
  global: { dashboard },
} = strings;

const Dashboard = () => {
  return (
    <MainContainer size="4">
      <Heading as="h1">{dashboard}</Heading>
      <Grid columns="2" gap="4">
        <Flex direction="column" gap="3">
          <Box>
            <BudgetOverview />
          </Box>
        </Flex>
      </Grid>
    </MainContainer>
  );
};

export default Dashboard;

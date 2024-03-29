import { Box, Card, Flex } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const LoadingIssueDetailPage = ({ issue }: { issue: string }) => {
  return (
    <Box className="max-w-xl">
      <Skeleton width="5rem" height="2rem" />
      <Flex gap="3" mb="4" mt="2">
        <Skeleton height="1rem" width="15rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={5} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;

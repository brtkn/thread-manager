import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  //if (typeof params.id !== "number") notFound();

  //await delay(2000);

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <Box className="max-w-xl">
      <Heading mb="5">{issue.title}</Heading>
      <Flex gap="3" mb="4">
        <IssueStatusBadge status={issue.status} />
        <Text>
          <p>{issue.createdAt.toDateString()}</p>
        </Text>
      </Flex>
      <Card className="prose" mt="4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </Box>
  );
};

export default IssueDetailPage;

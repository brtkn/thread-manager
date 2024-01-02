import { notFound } from "next/navigation";
import delay from "delay";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  //if (typeof params.id !== "number") notFound();

  const issue = await prisma?.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading mb="3">{issue.title}</Heading>
      <Flex gap="3" mb="4">
        <IssueStatusBadge status={issue.status} />
        <Text>
          <p>{issue.createdAt.toDateString()}</p>
        </Text>
      </Flex>
      <Card>{issue.description}</Card>
    </div>
  );
};

export default IssueDetailPage;

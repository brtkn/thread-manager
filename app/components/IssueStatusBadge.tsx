import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface Props {
  status: Status;
}
// You can destructure like that also {status}:{status:Status} if there is one property.

const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  CLOSED: { label: "Closed", color: "green" },
  IN_PROGRESS: { label: "In progress", color: "violet" },
};

const IssueStatusBadge = ({ status }: Props) => {
  // if (status === "OPEN") instead of writing all conditions we wrote Record <> and used it.
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;

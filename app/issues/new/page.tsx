import React from "react";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
const NewIssuePage = async () => {
  return (
    <div>
      <IssueForm />
    </div>
  );
};

export default NewIssuePage;

"use client";
import "easymde/dist/easymde.min.css";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import { z } from "zod";
import { Text } from "@radix-ui/themes";
import ErrorMessage from "@/app/component/ErrorMessage";

// we are gonna use zod type for this
/* interface IssueForm {
  title: string;
  description: string;
} */

const NewIssue = () => {
  //When we change the schema isssueFrom will also change.
  type IssueForm = z.infer<typeof createIssueSchema>;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl space-y-3">
      {error && (
        <Callout.Root className="mb-4">
          <Callout.Text color="red">{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data), router.push("/issues");
          } catch (error) {
            setError("An unexpected error occurred");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        {<ErrorMessage>{errors.title?.message}</ErrorMessage>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMdeReact placeholder="Description" {...field} />
          )}
        />
        {<ErrorMessage>{errors.description?.message}</ErrorMessage>}
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssue;

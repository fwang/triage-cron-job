import { StackContext, Cron, Job } from "sst/constructs";

export function MyStack({ stack }: StackContext) {
  const job = new Job(stack, "myJob", {
    handler: "packages/functions/src/job.handler",
    nodejs: {
      install: ["ssh2-sftp-client"],
    },
  });

  new Cron(stack, "myCron", {
    job: "packages/functions/src/cron.handler",
    schedule: "rate(1 minute)",
  });
}

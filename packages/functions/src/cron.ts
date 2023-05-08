import { Job } from "sst/node/job";

export const handler = async (_evt) => {
  await Job.test2.run({ foo: "bar" });
};

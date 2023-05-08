import { JobHandler } from "sst/node/job";
import sftp from "ssh2-sftp-client";

declare module "sst/node/job" {
  export interface JobTypes {
    test2: {
      foo?: string;
    };
  }
}
export const handler = JobHandler("test2", async (data: any) => {
  const client = new sftp();
});

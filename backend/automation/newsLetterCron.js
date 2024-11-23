import cron from "node-cron";
import { Job } from "../models/jobSchema.js";
import { User } from "../models/userSchema.js";
import { sendEmail } from "../utils/sendEmail.js";
import {} from "../utils/sendEmail.js";

export const newsLetterCron = () => {
  cron.schedule("*/1 * * * *", async () => {
    console.log("Running news Letter Cron Automation");
    const jobs = await Job.find({ newsLettersSent: false });
    for (const job of jobs) {
      try {
        const filteredUsers = await User.find({
          $or: [
            { "niches.firstNiche": job.jobNiche },
            { "niches.secondNiche": job.jobNiche },
            { "niches.thirdNiche": job.jobNiche },
          ],
        });
        for (const user of filteredUsers) {
          const subject = `Hot Job Alert: ${job.title} in ${job.jobNiche} available Now`;
          const message = `Hi  ${user.name} \n\n Great News! A new job that fits your niche has just been posted. The position is for a ${job.title} with ${job.companyName}, and they are looking to hire immediately. \n\n Job Details: \n **position:** ${job.title}\n **Company: ** ${job.companyName}\n- **Location:**${job.location}\n **Salary:** ${job.salary} \n\n Don't wait too long! Job openings like these are filled the form quickly. \n \n We're here to support you in your job search. Best of luck! \n\n Best Regards, \n NicheNest Team`;
          sendEmail({
            email: user.email,
            subject,
            message,
          });
        }
        job.newsLettersSent = true;
        await job.save();
      } catch (error) {
        console.log("Error In node cron catch block");
        return next(console.error(error || "some error in Cron."));
      }
    }
  });
};

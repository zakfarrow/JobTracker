import styles from "@/styles/modules/jobs.module.css";
import JobCard from "@/components/JobCard";

export default function Page() {
  const jobs: {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
    status: number;
  }[] = [
    {
      id: 0,
      title: "JavaScript developer",
      company: "Apple",
      description: "Foobar...",
      status: 0,
      location: "London",
    },
    {
      id: 1,
      title: "Python engineer",
      company: "Microsoft",
      description: "Foobar...",
      status: 1,
      location: "London",
    },
  ];
  return (
    <div>
      <h1>Jobs page</h1>
      <div className={styles.feedContainer}>
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            jobTitle={job.title}
            companyName={job.company}
            location={job.location}
          />
        ))}
      </div>
    </div>
  );
}

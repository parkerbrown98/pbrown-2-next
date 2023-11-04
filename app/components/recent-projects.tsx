import { getPublicRepos } from "@/lib/github";
import moment from "moment";
import ProjectCard from "./project-card";
import classNames from "classnames";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default async function RecentProjects({ className, ...props }: Props) {
  const repos = await getPublicRepos();
  const orderedRepos = repos.sort((a, b) => {
    return moment(b.pushed_at).diff(moment(a.pushed_at));
  });

  return (
    <div className={classNames(className, "flex flex-wrap gap-4")} {...props}>
      {orderedRepos.slice(0, 5).map((repo) => (
        <div key={repo.id} className="flex-shrink-0">
          <ProjectCard {...repo} />
        </div>
      ))}
    </div>
  );
}

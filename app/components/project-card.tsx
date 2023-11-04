import { ArrowUpCircleIcon, StarIcon } from "@heroicons/react/20/solid";
import moment from "moment";

type Props = {
  name: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  pushed_at: string;
};

export default function ProjectCard({
  name,
  html_url,
  language,
  stargazers_count,
  pushed_at,
}: Props) {
  const formattedPushedAt = moment(pushed_at).fromNow();

  return (
    <div className="flex flex-col space-y-2 border border-black p-4 cursor-default">
      <div className="flex items-center justify-between gap-4 md:gap-8">
        <h3 className="font-semibold text-xl">{name}</h3>
        <span className="text-xs bg-gray-100 font-mono px-2 py-1">{language}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="text-sm">
          <StarIcon className="inline-block w-4 h-4 mr-1 -mt-1 text-yellow-400" />
          {stargazers_count}
        </span>
        <span className="text-sm">
          <ArrowUpCircleIcon className="inline-block w-4 h-4 mr-1 -mt-1 text-green-400" />
          {formattedPushedAt}
        </span>
      </div>
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-500 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
}

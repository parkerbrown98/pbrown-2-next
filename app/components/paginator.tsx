"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { useRouter, usePathname } from "next/navigation";

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
}

export default function Paginator({ currentPage, totalPages }: PaginatorProps) {
  const router = useRouter();
  const pathname = usePathname();
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const onPageChange = (page: number) => {
    const href = `${pathname}?p=${page}`;
    router.push(href);
  };

  return (
    <nav className="flex items-center gap-x-2">
      <button
        className={classNames(
          "text-black font-semibold border border-black p-1 aspect-square flex items-center justify-center",
          {
            "opacity-50 cursor-default": currentPage === 1,
          }
        )}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <div className="text-black font-semibold">
        Page {currentPage}/{totalPages}
      </div>
      <button
        className={classNames(
          "text-black font-semibold border border-black p-1 aspect-square flex items-center justify-center",
          {
            "opacity-50 cursor-default": currentPage === totalPages,
          }
        )}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </nav>
  );
}

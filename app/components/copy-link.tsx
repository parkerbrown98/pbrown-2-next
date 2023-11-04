"use client";

import { LinkIcon } from "@heroicons/react/20/solid";

export default function CopyLinkButton() {
  const getCurrentUrl = () => {
    return window.location.href;
  };

  const copyUrlToClipboard = () => {
    const url = getCurrentUrl();
    navigator.clipboard.writeText(url);
  };

  return (
    <button className="bg-black p-1.5 md:p-2" onClick={copyUrlToClipboard}>
      <LinkIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />
    </button>
  );
}

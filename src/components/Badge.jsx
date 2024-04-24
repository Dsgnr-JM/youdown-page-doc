import { FireIcon } from "@heroicons/react/16/solid";

export default function Badge() {
  return (
    <div className="py-1 px-2 text-red-600/80 bg-red-200/50 hover:bg-red-200/60 rounded flex items-center gap-2 w-fit font-bold transition-colors cursor-pointer">
      <FireIcon className="size-4" />
      YouDownAPI
    </div>
  );
}

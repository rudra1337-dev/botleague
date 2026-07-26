import clsx from "clsx";
import type { LeaderboardEntry } from "@/types";

export function LeaderboardRow({ entry }: { entry: LeaderboardEntry }) {
  const isTop = entry.rank === 1;
  return (
    <tr className={clsx(isTop && "bg-brand-gold/10")}>
      <td className="py-2 pl-4 pr-2 text-sm font-semibold text-text-secondary">
        #{entry.rank}
      </td>
      <td className="py-2 pr-2">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={clsx(
              "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold",
              isTop ? "bg-brand-gold text-black" : "bg-surface-raised-2 text-text-secondary"
            )}
          >
            {entry.playerName.charAt(0)}
          </span>
          <span className="text-sm text-text-primary">{entry.playerName}</span>
        </div>
      </td>
      <td className="py-2 pr-4 text-right text-sm font-semibold text-text-primary">
        {entry.score.toLocaleString()}
      </td>
    </tr>
  );
}

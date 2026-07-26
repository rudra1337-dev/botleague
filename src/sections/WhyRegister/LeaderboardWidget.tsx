import { leaderboardEntries } from "@/data/whyRegister";
import { LeaderboardRow } from "./LeaderboardRow";

export function LeaderboardWidget() {
  return (
    <div className="rounded-xl border border-surface-border bg-surface-raised p-5">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-primary">
        Leaderboard
      </h3>
      <table className="w-full border-collapse">
        <caption className="sr-only">Current player rankings by score</caption>
        <thead>
          <tr className="text-left text-xs uppercase text-text-muted">
            <th scope="col" className="pb-2 pl-4">
              Rank
            </th>
            <th scope="col" className="pb-2">
              Player
            </th>
            <th scope="col" className="pb-2 pr-4 text-right">
              Score
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-border">
          {leaderboardEntries.map((entry) => (
            <LeaderboardRow key={entry.rank} entry={entry} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

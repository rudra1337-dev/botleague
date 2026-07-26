import type { BracketRound } from "@/types";
import clsx from "clsx";

function TeamSlot({ name, isWinner }: { name?: string; isWinner?: boolean }) {
  return (
    <div
      className={clsx(
        "rounded-md border px-3 py-2 text-xs font-medium",
        isWinner
          ? "border-brand-red/40 bg-brand-red/10 text-text-primary"
          : "border-surface-border bg-surface-raised-2 text-text-secondary"
      )}
    >
      {name ?? <span className="text-text-muted">TBD</span>}
    </div>
  );
}

export function BracketView({ rounds }: { rounds: BracketRound[] }) {
  return (
    <div className="overflow-x-auto pb-2" role="group" aria-label="Live tournament bracket">
      <div className="flex min-w-[640px] gap-8">
        {rounds.map((round) => (
          <div key={round.roundName} className="flex flex-1 flex-col justify-around gap-4">
            <h4 className="text-center text-xs font-semibold uppercase tracking-wide text-text-muted">
              {round.roundName}
            </h4>
            <div className="flex flex-1 flex-col justify-around gap-6">
              {round.matches.map((match) => (
                <div key={match.id} className="flex flex-col gap-1.5">
                  <TeamSlot name={match.teamA} isWinner={match.winnerId === `${match.id}-a`} />
                  <TeamSlot name={match.teamB} isWinner={match.winnerId === `${match.id}-b`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

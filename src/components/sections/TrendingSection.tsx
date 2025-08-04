import { TrackCard } from "@/components/music/TrackCard";
import { useTracks } from "@/hooks/useMusic";

export function TrendingSection() {
  const { data: tracks, isLoading, error } = useTracks();

  if (isLoading) {
    return (
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <button className="text-sm text-primary hover:underline">See all</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="music-card p-4 animate-pulse">
              <div className="bg-muted aspect-square rounded-lg mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error || !tracks?.length) {
    return (
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <button className="text-sm text-primary hover:underline">See all</button>
        </div>
        <div className="text-center py-8 text-muted-foreground">
          No tracks found. Start by uploading some music!
        </div>
      </section>
    );
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatPlays = (plays: number) => {
    if (plays >= 1000000000) {
      return `${(plays / 1000000000).toFixed(1)}B`;
    } else if (plays >= 1000000) {
      return `${(plays / 1000000).toFixed(1)}M`;
    } else if (plays >= 1000) {
      return `${(plays / 1000).toFixed(1)}K`;
    }
    return plays.toString();
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Trending Now</h2>
        <button className="text-sm text-primary hover:underline">See all</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {tracks.map((track, index) => (
          <TrackCard
            key={track.id}
            title={track.title}
            artist={track.artist.name}
            album={track.album.title}
            plays={formatPlays(track.plays)}
            duration={formatDuration(track.duration)}
            image={track.album.cover_url}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
          />
        ))}
      </div>
    </section>
  );
}
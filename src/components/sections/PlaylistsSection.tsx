import { PlaylistCard } from "@/components/music/PlaylistCard";
import { usePlaylists } from "@/hooks/useMusic";

export function PlaylistsSection() {
  const { data: playlists, isLoading, error } = usePlaylists();

  if (isLoading) {
    return (
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Playlists</h2>
          <button className="text-sm text-primary hover:underline">See all</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="music-card p-4 animate-pulse">
              <div className="bg-muted aspect-square rounded-lg mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error || !playlists?.length) {
    return (
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Playlists</h2>
          <button className="text-sm text-primary hover:underline">See all</button>
        </div>
        <div className="text-center py-8 text-muted-foreground">
          No playlists found. Create your first playlist!
        </div>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Playlists</h2>
        <button className="text-sm text-primary hover:underline">See all</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {playlists.map((playlist, index) => (
          <PlaylistCard
            key={playlist.id}
            title={playlist.name}
            description={playlist.description || ""}
            trackCount={playlist.playlist_tracks.length}
            image={playlist.cover_url}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
          />
        ))}
      </div>
    </section>
  );
}
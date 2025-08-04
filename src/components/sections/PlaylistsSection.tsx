import { PlaylistCard } from "@/components/music/PlaylistCard";

const featuredPlaylists = [
  {
    title: "Today's Top Hits",
    description: "The biggest hits right now, updated daily",
    trackCount: 50
  },
  {
    title: "Discover Weekly",
    description: "Your weekly mixtape of fresh music",
    trackCount: 30
  },
  {
    title: "Chill Vibes",
    description: "Perfect for relaxing and unwinding",
    trackCount: 75
  },
  {
    title: "Workout Beats",
    description: "High-energy tracks to power your workout",
    trackCount: 40
  },
  {
    title: "Indie Mix",
    description: "Fresh indie tracks from around the world",
    trackCount: 60
  },
  {
    title: "Jazz Classics",
    description: "Timeless jazz performances",
    trackCount: 85
  }
];

export function PlaylistsSection() {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Playlists</h2>
        <button className="text-sm text-primary hover:underline">See all</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {featuredPlaylists.map((playlist, index) => (
          <PlaylistCard
            key={index}
            title={playlist.title}
            description={playlist.description}
            trackCount={playlist.trackCount}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
          />
        ))}
      </div>
    </section>
  );
}
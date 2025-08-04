import { TrackCard } from "@/components/music/TrackCard";

const trendingTracks = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    plays: "2.1B",
    duration: "3:22"
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    plays: "5.4B",
    duration: "3:53"
  },
  {
    title: "Someone Like You",
    artist: "Adele",
    album: "21",
    plays: "1.8B",
    duration: "4:45"
  },
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    plays: "1.9B",
    duration: "5:55"
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep",
    plays: "2.3B",
    duration: "3:14"
  },
  {
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    plays: "1.5B",
    duration: "2:54"
  }
];

export function TrendingSection() {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Trending Now</h2>
        <button className="text-sm text-primary hover:underline">See all</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {trendingTracks.map((track, index) => (
          <TrackCard
            key={index}
            title={track.title}
            artist={track.artist}
            album={track.album}
            plays={track.plays}
            duration={track.duration}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
          />
        ))}
      </div>
    </section>
  );
}
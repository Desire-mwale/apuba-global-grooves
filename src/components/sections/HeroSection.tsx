import { Button } from "@/components/ui/button";
import { Play, Download, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative h-96 rounded-xl overflow-hidden mb-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      <div className="relative h-full flex items-center px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-music-primary" />
            <span className="text-sm font-medium text-music-primary">Trending Now</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Discover the
            <span className="text-gradient block">Future of Music</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Stream, download, and share millions of tracks from emerging and established artists worldwide. Join the APUBA community today.
          </p>
          
          <div className="flex items-center gap-4">
            <Button variant="music" size="xl" className="animate-pulse-glow">
              <Play className="h-5 w-5" />
              Start Listening
            </Button>
            <Button variant="outline" size="xl">
              <Download className="h-5 w-5" />
              Download App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
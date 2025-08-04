import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat, Heart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import albumPlaceholder from "@/assets/album-placeholder.jpg";

export function MusicPlayer() {
  return (
    <div className="h-20 bg-music-player border-t border-border px-6 flex items-center justify-between">
      {/* Currently Playing */}
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <div className="flex-shrink-0">
          <img
            src={albumPlaceholder}
            alt="Current track"
            className="h-12 w-12 rounded-lg object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">Blinding Lights</p>
          <p className="text-xs text-muted-foreground truncate">The Weeknd</p>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-2 flex-1 max-w-lg">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Shuffle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button variant="music" size="icon" className="h-10 w-10 glow-effect">
            <Play className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <SkipForward className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Repeat className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-muted-foreground">1:23</span>
          <Slider
            defaultValue={[33]}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground">3:45</span>
        </div>
      </div>

      {/* Volume & Extras */}
      <div className="flex items-center gap-2 flex-1 justify-end">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Volume2 className="h-4 w-4" />
        </Button>
        <Slider
          defaultValue={[75]}
          max={100}
          step={1}
          className="w-24"
        />
      </div>
    </div>
  );
}
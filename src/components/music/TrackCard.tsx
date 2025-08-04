import { Play, Heart, MoreHorizontal, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import albumPlaceholder from "@/assets/album-placeholder.jpg";

interface TrackCardProps {
  title: string;
  artist: string;
  album?: string;
  duration?: string;
  image?: string;
  plays?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function TrackCard({
  title,
  artist,
  album,
  duration = "3:45",
  image = albumPlaceholder,
  plays,
  className,
  style
}: TrackCardProps) {
  return (
    <div className={cn("music-card p-4 group", className)} style={style}>
      <div className="relative mb-4">
        <img
          src={image}
          alt={`${title} by ${artist}`}
          className="w-full aspect-square object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
          <Button variant="music" size="icon" className="h-12 w-12">
            <Play className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-sm truncate">{title}</h3>
        <p className="text-xs text-muted-foreground truncate">{artist}</p>
        {album && (
          <p className="text-xs text-muted-foreground truncate">{album}</p>
        )}
        {plays && (
          <p className="text-xs text-muted-foreground">{plays} plays</p>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-muted-foreground">{duration}</span>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Heart className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Download className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <MoreHorizontal className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
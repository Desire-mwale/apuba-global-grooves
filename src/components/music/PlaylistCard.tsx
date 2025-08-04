import { Play, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import albumPlaceholder from "@/assets/album-placeholder.jpg";

interface PlaylistCardProps {
  title: string;
  description: string;
  trackCount?: number;
  image?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function PlaylistCard({
  title,
  description,
  trackCount,
  image = albumPlaceholder,
  className,
  style
}: PlaylistCardProps) {
  return (
    <div className={cn("music-card p-4 group cursor-pointer", className)} style={style}>
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
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
        <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
        {trackCount && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Music className="h-3 w-3" />
            <span>{trackCount} tracks</span>
          </div>
        )}
      </div>
    </div>
  );
}
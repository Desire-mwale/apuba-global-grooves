import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Track {
  id: string;
  title: string;
  duration: number;
  plays: number;
  file_url: string;
  created_at: string;
  artist: {
    id: string;
    name: string;
  };
  album: {
    id: string;
    title: string;
    cover_url?: string;
  };
  genre: {
    id: string;
    name: string;
  };
}

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  cover_url?: string;
  created_at: string;
  playlist_tracks: {
    track: Track;
  }[];
}

export function useTracks() {
  return useQuery({
    queryKey: ["tracks"],
    queryFn: async () => {
      // Return empty array for now until database is set up
      return [] as Track[];
    },
  });
}

export function usePlaylists() {
  return useQuery({
    queryKey: ["playlists"],
    queryFn: async () => {
      // Return empty array for now until database is set up
      return [] as Playlist[];
    },
  });
}

export function useUploadTrack() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (params: {
      file: File;
      title: string;
      artistName: string;
      albumTitle: string;
      genreName: string;
      duration: number;
      coverFile?: File;
    }) => {
      // Placeholder for upload functionality
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { id: "placeholder" };
    },
    onSuccess: () => {
      toast({
        title: "Upload Ready",
        description: "Database migration needed first. Please approve the migration.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Database not ready. Please approve the migration first.",
        variant: "destructive",
      });
    },
  });
}
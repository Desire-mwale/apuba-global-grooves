import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MusicPlayer } from "@/components/music/MusicPlayer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrendingSection } from "@/components/sections/TrendingSection";
import { PlaylistsSection } from "@/components/sections/PlaylistsSection";

const Index = () => {
  return (
    <div className="h-screen flex bg-background">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          <HeroSection />
          <TrendingSection />
          <PlaylistsSection />
        </main>
        
        {/* Music Player */}
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Index;
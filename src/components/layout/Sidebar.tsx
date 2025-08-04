import { Home, Search, Library, Heart, PlusCircle, Music, Mic2, Radio, TrendingUp } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Search", href: "/search", icon: Search },
  { name: "Your Library", href: "/library", icon: Library },
];

const library = [
  { name: "Liked Songs", href: "/liked", icon: Heart },
  { name: "Recently Played", href: "/recent", icon: Music },
];

const discover = [
  { name: "Trending", href: "/trending", icon: TrendingUp },
  { name: "Radio", href: "/radio", icon: Radio },
  { name: "Artists", href: "/artists", icon: Mic2 },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-music-card border-r border-border h-full flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gradient">APUBA</h1>
        <p className="text-muted-foreground text-sm">Music for everyone</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}

        <div className="pt-6">
          <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Your Library
          </h3>
          {library.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="pt-6">
          <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Discover
          </h3>
          {discover.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Create Playlist */}
      <div className="p-4 border-t border-border">
        <Button variant="music" size="sm" className="w-full">
          <PlusCircle className="h-4 w-4" />
          Create Playlist
        </Button>
      </div>
    </div>
  );
}
import {
  ArrowUpRight,
  CalendarDays,
  Car,
  Check,
  ChevronRight,
  Heart,
  Languages,
  Leaf,
  Mail,
  MapPin,
  Moon,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  Waves,
} from "lucide-react";
import type { IconKey } from "@/content/types";

const iconMap = {
  arrow: ArrowUpRight,
  beach: Waves,
  calendar: CalendarDays,
  car: Car,
  check: Check,
  family: UsersRound,
  heart: Heart,
  language: Languages,
  leaf: Leaf,
  mail: Mail,
  map: MapPin,
  moon: Moon,
  phone: Phone,
  shield: ShieldCheck,
  sparkles: Sparkles,
  star: Star,
  users: UsersRound,
} satisfies Record<IconKey, typeof ArrowUpRight>;

export function Icon({
  name,
  className,
}: {
  name: IconKey;
  className?: string;
}) {
  const Component = iconMap[name];
  return <Component aria-hidden="true" className={className} strokeWidth={1.8} />;
}

export function ChevronIcon({ className }: { className?: string }) {
  return (
    <ChevronRight
      aria-hidden="true"
      className={`arrow-icon ${className ?? ""}`}
      strokeWidth={1.9}
    />
  );
}

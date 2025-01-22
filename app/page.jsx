import Calendar from "@/components/Cards/Calendar/Calendar";
import General from "@/components/Cards/General/General";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <General />

        <div className="grid gap-[32px]">
            <Calendar />
            <Calendar />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[32px]">
        <Card className="h-[300px]">Hello</Card>
        <Card className="h-[300px]">Hello</Card>
        <Card className="h-[300px]">Hello</Card>
      </div>
    </div>
  );
}

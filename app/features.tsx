/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ueNZnPfnwRW
 */
import { CardContent, Card } from "@/components/ui/card";

export function Features() {
  return (
    <div className="font-mono grid md:grid-cols-2 gap-6 items-start max-w-6xl mx-auto">
      <Card className="bg-gradient-to-tr from-gray-900 to-gray-600 animate-gradient-x">
        <CardContent className="flex flex-col items-center gap-4 p-4">
          <div className="rounded-full w-[200px] h-[200px] bg-slate-100"></div>
          <h2 className="font-bold text-xl text-white">会议总结</h2>
          <p className="text-sm text-slate-100">
            Generate Summary from Feishu Minutes
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-tr from-gray-900 to-gray-600 animate-gradient-x">
        <CardContent className="flex flex-col items-center gap-4 p-4">
          <div className="rounded-full w-[200px] h-[200px] bg-slate-100"></div>
          <h2 className="font-bold text-xl text-white">会议聊天</h2>
          <p className="text-sm text-slate-100">Chat With Feishu Minutes</p>
        </CardContent>
      </Card>
    </div>
  );
}

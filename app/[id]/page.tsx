import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Summary } from "./summary";
import { OriginText } from "./origin-text";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonDemo() {
  return (
    <div className="mt-8 space-y-2 w-full">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-10/12" />
      <Skeleton className="h-4 w-8/12" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-10/12" />
      <Skeleton className="h-4 w-8/12" />
    </div>
  );
}

export default async function Detail({ params }: { params: { id: string } }) {
  return (
    <div className="grid grid-cols-2 gap-x-4">
      <div
        className="flex flex-col border border-slate-900/10 rounded"
        style={{ maxHeight: "calc(100vh - 148px)" }}
      >
        <a
          href="https://bytedance.feishu.cn/minutes/obcnfce51avh28pmd91g5k6w"
          target="_blank"
          className="block pl-2 py-2 bg-muted font-semibold text-sm italic text-blue-600 break-words"
        >
          https://bytedance.feishu.cn/minutes/obcnfce51avh28pmd91g5k6w
        </a>
        <OriginText id={params.id} />
      </div>
      <Tabs defaultValue="sum" className="w-full">
        <TabsList>
          <TabsTrigger value="sum">Summary</TabsTrigger>
          <TabsTrigger value="chat">Chatbot</TabsTrigger>
        </TabsList>
        <TabsContent value="sum">
          <Suspense fallback={<SkeletonDemo />}>
            <Summary id={params.id} />
          </Suspense>
        </TabsContent>
        <TabsContent value="chat">WIP</TabsContent>
      </Tabs>
    </div>
  );
}

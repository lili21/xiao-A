"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Features } from "./features";
import { HOST } from "@/lib/const";

const examples = [
  "https://bytedance.feishu.cn/minutes/obcnfce51avh28pmd91g5k6w",
  "https://bytedance.feishu.cn/minutes/obcnaj4haa5e187k885q55vo",
  "https://bytedance.feishu.cn/minutes/obcnzw5b964nyjv28394hccx",
];

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${HOST}/index`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
        cache: "no-cache",
      });
      const {
        data: { id },
      } = await res.json();
      router.push(`/${id}`);
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12 w-full space-y-8">
      <Features />
      <div className="space-y-2 text-slate-600">
        <p className="font-semibold italic">Try some examples</p>
        <ul className="space-y-1 list-disc ml-4">
          {examples.map((link) => (
            <li
              key={link}
              onClick={() => setUrl(link)}
              className="cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex w-full items-center">
        <Input
          name="url"
          placeholder="飞书妙记链接"
          className="flex-1"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          className="ml-4"
          type="button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "loading..." : "Submit"}
        </Button>
        <Toaster />
      </div>
    </div>
  );
}

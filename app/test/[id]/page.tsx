import { useParams } from "next/navigation";
import { Store } from "../store";
export default async function Chat() {
  const { id } = useParams<{ id: string }>();

  const index = Store.get(id);
  if (index) {
    // Query the index
    const queryEngine = index.asQueryEngine();
    const response = await queryEngine.query("这篇会议文档讲了什么内容");

    // Output response
    return <h1>{response.toString()}</h1>;
  } else {
    return <h1>not found</h1>;
  }
}

import { ingest } from "../ingest/ingest";
export default function Home() {
  ingest();
  return <main className="container mx-auto "></main>;
}

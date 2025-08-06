import ChatBox from "../components/chat-box";
import { ingest } from "../ingest/ingest";
export default function Home() {
  ingest();
  return (
    <main className="container mx-auto">
      <ChatBox></ChatBox>
    </main>
  );
}

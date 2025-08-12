import ChatBox from "../components/chat-box";
import { ingest } from "../ingest/ingest";
export default function Home() {
  ingest();
  return (
    <main className="">
      <ChatBox></ChatBox>
    </main>
  );
}

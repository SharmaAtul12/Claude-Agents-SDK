import "dotenv/config";
import { query } from "@anthropic-ai/claude-agent-sdk";

const response = await query({
  prompt: "hey , i'm atul . who are you in 5 words ?"
});

async function main() {
  for await (const message of response) {
    // console.log(`Response :-> ${message}`);
    if(message.type === "result" && message.subtype === 'success') {
      console.log(`Final Result :-> ${message.result}`);
    }
  }
}

main();
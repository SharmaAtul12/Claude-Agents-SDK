/**
 * {
 *   "SystemMessage": "A session lifecycle event, such as initialization, compaction, status, or shutdown.",
 *
 *   "AssistantMessage": "One text or tool-use content block from Claude.",
 *
 *   "UserMessage": "Tool results sent back to Claude or user input streamed during the loop.",
 *
 *   "StreamEvent": "A partial API event, such as a text delta or tool-input chunk.",
 *
 *   "ResultMessage": "The end of the loop, containing the result, usage, cost, session ID, and status."
 * }
 */
import "dotenv/config";
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({ prompt: "Summarize this project" })) {
  if (message.type === "assistant") {
    console.log(
      `Assistant : ${message.message.content} , \n\n\n\n`,
    );
  }

  if (message.type === "result") {
    if (message.subtype === "success") {
      console.log(message.result);
    } else {
      console.log(`Stopped: ${message.subtype}`);
    }
  }
}
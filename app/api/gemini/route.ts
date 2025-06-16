import { ai } from "@/lib/gemini";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt: youtubeUrl } = await req.json();

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",

      contents: [
        {
          text: `You are a seasoned content analyst with extensive experience in summarizing and extracting key insights from multimedia content. I would like to leverage your expertise to provide a concise yet comprehensive summary of the specified YouTube video.

Please ensure your summary includes the following structured details:

Video Title & Creator: Identify the exact title of the video and the name of the creator/channel.
Core Topic: Briefly describe the central theme or subject matter covered in the video.
Key Points: Extract and list the most critical takeaways, arguments, or insights presented, in order of importance.
Supporting Details: Highlight any data, examples, or evidence used to reinforce the main points.
Audience Relevance: Indicate the intended audience (e.g., beginners, professionals, enthusiasts) and why the content is valuable to them.
Call to Action (if applicable): Note any prompts or requests made by the creator (e.g., subscribing, visiting a website, engaging in discussion).
Rely on your analytical skills and domain expertise to deliver a summary that is accurate, well-structured, and actionable for readers seeking to grasp the video’s essence efficiently.

Your summary should be professional, neutral in tone, and free of personal opinions, ensuring it serves as a reliable reference for further engagement with the content. The following is the video link:`,
        },
        {
          fileData: {
            mimeType: "video/mp4",
            fileUri: youtubeUrl,
          },
        },
      ],
    });

    // Extract the text safely
    const text = response.candidates?.[0]?.content?.parts?.[0]?.text || "No summary available.";

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json({ error: "Failed to summarize video. Please check the URL and try again." }, { status: 500 });
  }
}

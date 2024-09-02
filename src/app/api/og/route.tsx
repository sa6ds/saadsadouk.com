import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const font1 = await fetch(
      new URL("../../assets/fonts/satoshi-bold-webfont.woff", import.meta.url)
    );

    if (!font1.ok) {
      throw new Error("Failed to fetch the font file");
    }

    const fontData1 = await font1.arrayBuffer();

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 42,
              top: 42,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: 24,
                height: 24,
                background: "black",
              }}
            />
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
              }}
            >
              saadsadouk.com
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: 20,
              fontSize: 40,
              width: "auto",
              maxWidth: 550,
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <span style={{ fontSize: "48px" }}>Saad Sadouk</span>
            <span style={{ marginBottom: "10px", color: "grey" }}>
              Software Engineer
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: "twemoji",
        fonts: [
          {
            name: "Inter",
            data: fontData1,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    } else {
      console.log("An unknown error occurred");
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

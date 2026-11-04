import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E0F12",
          borderRadius: "50%",
          border: "2px solid #C8F135",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 800,
            color: "#C8F135",
            fontFamily: "sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-2px",
          }}
        >
          J
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

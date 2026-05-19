"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  accent: string;
  rotate?: 90 | 180 | 270;
};

export default function CertThumb({ src, accent, rotate }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

        const pdf = await pdfjsLib.getDocument(src).promise;
        if (cancelled) return;

        const page = await pdf.getPage(1);
        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const containerWidth = canvas.parentElement?.clientWidth ?? 360;

        // With 90/270 rotation width and height swap, so scale against the rotated width
        const baseViewport = page.getViewport({ scale: 1, rotation: rotate ?? 0 });
        const scale = containerWidth / baseViewport.width;
        const viewport = page.getViewport({ scale, rotation: rotate ?? 0 });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: canvas.getContext("2d")!, viewport, canvas }).promise;

        if (!cancelled) setReady(true);
      } catch {
        if (!cancelled) setFailed(true);
      }
    };

    render();
    return () => {
      cancelled = true;
    };
  }, [src, rotate]);

  if (failed) return null;

  return (
    <>
      {!ready && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(135deg, ${accent}10 0%, ${accent}05 100%)`,
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              border: `2px solid ${accent}40`,
              borderTopColor: accent,
              animation: "spin 0.8s linear infinite",
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          display: "block",
          opacity: ready ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
    </>
  );
}

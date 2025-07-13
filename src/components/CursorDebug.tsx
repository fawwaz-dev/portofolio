"use client";

import { useEffect, useState } from "react";

export default function CursorDebug() {
  const [debugInfo, setDebugInfo] = useState({
    windowWidth: 0,
    hardwareConcurrency: 0,
    hasReducedMotion: false,
    isTouchDevice: false,
    userAgent: "",
  });

  useEffect(() => {
    const updateDebugInfo = () => {
      setDebugInfo({
        windowWidth: window.innerWidth,
        hardwareConcurrency: navigator.hardwareConcurrency,
        hasReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches,
        isTouchDevice: "ontouchstart" in window,
        userAgent: navigator.userAgent,
      });
    };

    updateDebugInfo();
    window.addEventListener("resize", updateDebugInfo);

    return () => window.removeEventListener("resize", updateDebugInfo);
  }, []);

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg font-mono text-xs z-[9999] max-w-xs">
      <h3 className="text-neon-green mb-2">Cursor Debug Info:</h3>
      <div className="space-y-1">
        <div>Window Width: {debugInfo.windowWidth}px</div>
        <div>Hardware Cores: {debugInfo.hardwareConcurrency}</div>
        <div>Reduced Motion: {debugInfo.hasReducedMotion ? "Yes" : "No"}</div>
        <div>Touch Device: {debugInfo.isTouchDevice ? "Yes" : "No"}</div>
        <div>Mobile: {debugInfo.windowWidth < 768 ? "Yes" : "No"}</div>
        <div>
          Low Performance: {debugInfo.hardwareConcurrency <= 2 ? "Yes" : "No"}
        </div>
      </div>
      <div className="mt-2 text-electric-400">
        <div>
          Expected Cursor: {debugInfo.windowWidth < 768 ? "Hidden" : "Visible"}
        </div>
      </div>
    </div>
  );
}

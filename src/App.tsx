import { useState } from "react";
import ColorForm from "./components/ColorForm";
import ColorDisplay from "./components/ColorDisplay";
import type { Color, ColorApiResponse } from "./types/color";

export default function App() {
  const [color, setColor] = useState("#F55A5A");
  const [mode, setMode] = useState("monochrome");
  const [colors, setColors] = useState<Color[]>([]);

  const fetchColors = async () => {
    try {
      const hex = color.replace("#", "");
      const res = await fetch(
        `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`
      );
      const data: ColorApiResponse = await res.json();
      setColors(data.colors);
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-xl bg-white rounded-xl overflow-hidden shadow-2xl">
        <ColorForm
          color={color}
          setColor={setColor}
          mode={mode}
          setMode={setMode}
          fetchColors={fetchColors}
        />
        <ColorDisplay colors={colors} />
      </div>
    </div>
  );
}
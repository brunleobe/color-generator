import type { Color } from "../types/color";

type Props = {
    colors: Color[];
};

const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
};

export default function ColorDisplay({ colors }: Props) {
    if (colors.length === 0) {
        return (
            <div className="flex items-center justify-center h-48 text-sm text-gray-400 bg-gray-50">
                Pick a color and click <span className="font-semibold text-gray-500 mx-1">Get color scheme</span> to start
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            {/* Color strips */}
            <div className="flex h-72">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="flex-1 cursor-pointer hover:brightness-90 transition-all"
                        style={{ backgroundColor: color.hex.value }}
                        onClick={() => copyToClipboard(color.hex.value)}
                        title={`Click to copy ${color.hex.value}`}
                    />
                ))}
            </div>

            {/* Hex labels */}
            <div className="flex border-t border-gray-200 bg-white">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="flex-1 text-center py-3 text-xs font-medium text-gray-600 tracking-wide cursor-pointer hover:bg-gray-50 transition-colors select-none"
                        onClick={() => copyToClipboard(color.hex.value)}
                        title={`Click to copy ${color.hex.value}`}
                    >
                        {color.hex.value}
                    </div>
                ))}
            </div>
        </div>
    );
}
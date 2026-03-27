type Props = {
    color: string;
    setColor: (color: string) => void;
    mode: string;
    setMode: (mode: string) => void;
    fetchColors: () => void;
};

export default function ColorForm({
    color,
    setColor,
    mode,
    setMode,
    fetchColors,
}: Props) {
    return (
        <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
            {/* Color Picker Swatch */}
            <label className="relative cursor-pointer flex-shrink-0" title="Pick a color">
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
                <span
                    className="block w-11 h-11 rounded-md border-2 border-black/10"
                    style={{ backgroundColor: color }}
                />
            </label>

            {/* Mode Dropdown */}
            <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="flex-1 appearance-none px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 bg-white focus:outline-none focus:border-gray-500 cursor-pointer"
            >
                <option value="monochrome">Monochrome</option>
                <option value="monochrome-dark">Monochrome-dark</option>
                <option value="monochrome-light">Monochrome-light</option>
                <option value="analogic">Analogic</option>
                <option value="complement">Complement</option>
                <option value="analogic-complement">Analogic-complement</option>
                <option value="triad">Triad</option>
            </select>

            {/* Button */}
            <button
                onClick={fetchColors}
                className="flex-shrink-0 px-4 py-2.5 text-sm font-medium text-gray-800 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors whitespace-nowrap"
            >
                Get color scheme
            </button>
        </div>
    );
}
import LastBuildTime from "./LastBuildTime";

export const Header = () => (
  <header className="w-full" style={{ backgroundColor: "#1F2937" }}>
    <div className="max-w-[1280px] mx-auto px-4 py-2 relative">
      <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left relative">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="icon.webp"
            alt="Avatar"
            className="w-12 h-12 rounded-full mr-3"
          />
          <h1 className="text-white text-2xl font-bold">DK's Server Rules</h1>
        </div>
        <LastBuildTime />
      </div>
    </div>
  </header>
);
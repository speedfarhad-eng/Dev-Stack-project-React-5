import { use, useState } from "react";
import type { Technology } from "../../types/types";
import AllTechnologies from "./AllTechnologies";
import YourStack from "./YourStack";

interface TechnologiesProps {
  dataPromise: Promise<Technology[]>;
}

const Technologies = ({ dataPromise }: TechnologiesProps) => {
  const fetchData = use(dataPromise);

  const [selectedTech, setSelectedTech] = useState<Technology[]>([]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 items-start relative">
        <div className="flex-1 w-full">
          <h1 className="font-bold text-3xl">Explore the <span className="font-bold text-3xl text-pink-400">Technologies</span> </h1>
          <p className="font-bold mb-10 py-2">Pick one technology per category to build your ideal stack.</p>
          <AllTechnologies
            fetchData={fetchData}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
        </div>

        <div className="w-full lg:w-[320px] shrink-0 sticky top-6">
          <YourStack
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;

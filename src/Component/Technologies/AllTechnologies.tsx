import type { Technology } from "../../types/types";
import Technologiescard from "./Technologiescard";

interface AllTechnologyProps {
  fetchData: Technology[];
  selectedTech: Technology[];
  setSelectedTech: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const AllTechnologies = ({
  fetchData,
  selectedTech,
  setSelectedTech,
}: AllTechnologyProps) => {
  return (
    <div className="grid grid-cols-3  gap-4">
      {fetchData.map((tech) => (
        <Technologiescard
          key={tech.id}
          tech={tech}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
      ))}
    </div>
  );
};

export default AllTechnologies;

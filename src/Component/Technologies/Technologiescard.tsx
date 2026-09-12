import type { Technology } from "../../types/types";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TechnologiesCardProps {
  tech: Technology;
  selectedTech: Technology[];
  setSelectedTech: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const TechnologiesCard = ({
  tech,
  selectedTech,
  setSelectedTech,
}: TechnologiesCardProps) => {
  const isSelected = selectedTech.filter((card) => card.id === tech.id).length >0;

  const handleAddToStack = () => {
    if (isSelected) return;
    setSelectedTech((farhad) => [...farhad, tech]);
    toast("🦄 Stack Added Sucessfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
      <div>
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 p-2">
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-9 w-9 object-contain"
            />
          </div>
          {tech.badge && (
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
              {tech.badge}
            </span>
          )}
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
          <p className="mt-2 text-xs leading-relaxed text-gray-500 min-h-[36px]">
            {tech.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            {tech.category}
          </span>
          <span className="rounded-lg bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
            {tech.difficulty}
          </span>
          <span className="rounded-lg bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-600">
            ⭐ {tech.rating}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleAddToStack}
          disabled={isSelected}
          className={`w-full rounded-xl py-3 text-sm font-semibold transition-all ${
            isSelected
              ? "bg-emerald-50 text-emerald-600 cursor-not-allowed"
              : "bg-gray-900 text-white hover:bg-orange-500 shadow-md"
          }`}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologiesCard;

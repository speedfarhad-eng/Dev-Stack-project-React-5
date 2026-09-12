import type { Technology } from "../../types/types";
import { TiDelete } from "react-icons/ti";
import toast, { Toaster } from 'react-hot-toast'; //

interface YourStackProps {
  selectedTech: Technology[];
  setSelectedTech: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const YourStack = ({ selectedTech, setSelectedTech }: YourStackProps) => {
  const handleRemove = (id: string) => {
    setSelectedTech((previous) => previous.filter((tech) => tech.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedTech([]);


    
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">

      <Toaster position="top-right" reverseOrder={false} />
      <div className="mb-1">
        <h3 className="font-bold text-gray-900 text-lg">Your Stack</h3>
        <p className="text-xs font-medium text-gray-400 mt-0.5">
          {selectedTech.length}{" "}
          {selectedTech.length === 1
            ? "Technology Selected"
            : "Technologies Selected"}
        </p>
      </div>

      {selectedTech.length === 0 ? (
        <div className="w-full h-[66px] border-2 border-dashed border-gray-100 rounded-xl flex text-center items-center justify-center mt-4">
          <p className="text-gray-400 text-xs">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3 mt-4 mb-4">
          {selectedTech.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-7 h-7 object-contain"
                />
                <div>
                  <h4 className="font-bold text-xs text-gray-900">
                    {tech.name}
                  </h4>
                  <p className="text-[10px] text-gray-400">{tech.category}</p>
                </div>
              </div>

              {/* crose button react theke anchi */}

              <button
                onClick={() => handleRemove(tech.id)}
                className="text-gray-400 hover:text-red-500 text-lg cursor-pointer transition-colors"
              >
                <TiDelete />
              </button>
            </div>
          ))}
        </div>
      )}





      {/* Remove All button ready*/}


      {selectedTech.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="w-full mt-2 px-4 py-2 cursor-pointer font-semibold rounded-xl transition-all border border-red-200 text-red-500 hover:bg-red-50 text-xs"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;

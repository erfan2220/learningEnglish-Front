import Button from "@/components/Button/Button";
import Inputs from "@/components/Input/Input";
import React from "react";

interface AddLessonProps {
  handleClosePopup: () => void;
  handleAddLesson: () => void;
}

const AddLessonPopUp: React.FC<AddLessonProps> = ({
  handleClosePopup,
  handleAddLesson,
}) => {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center">
      <div className="relative bg-white rounded-xl p-6 shadow-xl w-[90%] max-w-md">
        <div className="flex flex-col justify-center items-center mt-4 gap-4">
          <div
            onClick={handleClosePopup}
            className="absolute top-4 right-4 rounded-full px-3 py-1.5 hover:cursor-pointer bg-[#5F33E1] hover:bg-[#4921BF] transition-colors"
          >
            <p className="text-white font-semibold">X</p>
          </div>

          <div>
            <Inputs
              placeholder="Lesson Title"
              label="Lesson Title"
              type="text"
              inputIcon={null}
            />
            <Inputs
              placeholder="Part of Lesson"
              label="Part of Lesson"
              type="text"
              inputIcon={null}
            />
          </div>

          <Button
            label="Add Lesson"
            type="button"
            onclick={handleAddLesson}
            colorBtn="#97C01C"
            btnIcon={null}
          />
        </div>
      </div>
    </div>
  );
};

export default AddLessonPopUp;

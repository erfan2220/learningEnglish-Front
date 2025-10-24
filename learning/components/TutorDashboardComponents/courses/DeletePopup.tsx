import Button from "@/components/Common/Button/Button";
import React from "react";

interface DeletePopupProps {
  handleClosePopup: () => void;
  handleConfirmDelete: () => void;
}

const DeletePopup: React.FC<DeletePopupProps> = ({
  handleClosePopup,
  handleConfirmDelete,
}) => {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 shadow-xl w-[90%] max-w-md">
        <p className="text-[#45444A] font-semibold text-center mb-4">
          Are you sure you want to delete this lesson?
        </p>
        <div className="flex justify-center mt-4 gap-4">
          <Button
            label="Cancel"
            type="button"
            onclick={handleClosePopup}
            colorBtn="#FCFCFC"
            colorBtnText="#45444A"
            btnIcon={null}
          />
          <Button
            label="Delete"
            type="button"
            onclick={handleConfirmDelete}
            colorBtn="#BF213B"
            btnIcon={null}
          />
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;

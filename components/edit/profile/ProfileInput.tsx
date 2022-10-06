import React, { useState } from "react";

const ProfileInput = ({
  selectedName,
  setForm,
  label,
  dataToChange,
}: {
  selectedName: any;
  setForm: any;
  label: string;
  dataToChange: string;
}) => {
  const handleInput = (e: any) => {
    setValue(e.target.value);
    setForm((currentFormData: any) => {
      const nextFormData = {
        ...currentFormData,
        [dataToChange]: e.target.value,
      };
      return nextFormData;
    });
  };

  const [value, setValue] = useState(selectedName);

  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2">{label}</label>
      <input
        className="p-2 rounded w-96"
        value={value}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
};

export default ProfileInput;
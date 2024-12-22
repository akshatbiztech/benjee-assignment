import { useState } from "react";

function Page() {
  const [maritalStatus, setMaritalStatus] = useState("Married");

  const handleMaritalStatusChange = (event) => {
    setMaritalStatus(event.target.value);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Accident Benefits Application</h1>
      <div className="mb-4">
        <label htmlFor="marital-status" className="block mb-2">
          Marital Status:
        </label>
        <div className="flex items-center">
          <input
            type="radio"
            id="single"
            value="Single"
            name="marital-status"
            checked={maritalStatus === "Single"}
            onChange={handleMaritalStatusChange}
            className="mr-2"
          />
          <label htmlFor="single">Single</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="married"
            value="Married"
            name="marital-status"
            checked={maritalStatus === "Married"}
            onChange={handleMaritalStatusChange}
            className="mr-2"
          />
          <label htmlFor="married">Married</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="common-law"
            value="Common-law"
            name="marital-status"
            checked={maritalStatus === "Common-law"}
            onChange={handleMaritalStatusChange}
            className="mr-2"
          />
          <label htmlFor="common-law">Common-law</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="separated"
            value="Separated"
            name="marital-status"
            checked={maritalStatus === "Separated"}
            onChange={handleMaritalStatusChange}
            className="mr-2"
          />
          <label htmlFor="separated">Separated</label>
        </div>
        <div className="flex items- center">
          <input
            type="radio"
            id="divorced"
            value="Divorced"
            name="marital-status"
            checked={maritalStatus === "Divorced"}
            onChange={handleMaritalStatusChange}
            className="mr-2"
          />
          <label htmlFor="divorced">Divorced</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="widowed"
            value="Widowed"
            name="marital-status"
            checked={maritalStatus === "Widowed"}
            onChange={handleMaritalStatusChange}
            className="mr-2"
          />
          <label htmlFor="widowed">Widowed</label>
        </div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
}

export default Page;

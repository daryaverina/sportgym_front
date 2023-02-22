import ClubsList from "@/components/Clubs/ClubsList/ClubsList";
import ClubsMap from "@/components/Clubs/ClubsMap/ClubsMap";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function Clubs() {
  const showTypes = [
    { id: "list", title: "Show as List" },
    { id: "map", title: "Show on map" },
  ];
  const [showType, setShowType] = useState("list");
  const DynamicMap = dynamic(() => import('@/components/Clubs/ClubsMap/ClubsMap'), {
    ssr: false,
  })
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Clubs
        </h2>
        <p className="text-sm leading-5 text-gray-500">
          How do you prefer to view clubs list?
        </p>
        <fieldset className="mt-4">
          <legend className="sr-only">Notification method</legend>
          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
            {showTypes.map((type) => (
              <div key={type.id} className="flex items-center">
                <input
                  id={type.id}
                  name="notification-method"
                  type="radio"
                  defaultChecked={type.id === "list"}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  onClick={() => {
                    setShowType(type.id);
                  }}
                />
                <label
                  htmlFor={type.id}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {type.title}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
      {showType == "list" ? <ClubsList /> : <DynamicMap/>}
    </>
  );
}

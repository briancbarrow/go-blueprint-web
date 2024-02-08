"use client";
import { useState } from "react";

import FeatureBlock from "./FeatureBlock";
import FolderIcon from "./icons/Folder";
import GenericIcon from "./icons/Generic";
import InfoIcon from "./icons/Info";
import DockerYamlIcon from "./icons/DockerYaml";

export type FeatureTuple = [string, string];

export default function Example() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [projectName, setProjectName] = useState<string>("");

  const [selectedDB, setSelectedDB] = useState<string>("none");
  const [selectedFramework, setSelectedFramework] = useState<string>("");

  const databases: FeatureTuple[] = [
    ["none", "None"],
    ["mysql", "MySQL"],
    ["postgres", "Postgres"],
    ["sqlite", "SQLite"],
    ["mongo", "MongoDB"],
  ];

  const frameworks: FeatureTuple[] = [
    ["chi", "Chi"],
    ["echo", "Echo"],
    ["fiber", "Fiber"],
    ["gin", "Gin"],
    ["gorilla/mux", "Gorilla"],
    ["httprouter", "HttpRouter"],
    ["standard-library", "Standard Library"],
  ];

  const handleFeatureChange = (feature: string) => {
    setSelectedFeatures((prevFeatures: string[]) =>
      prevFeatures.includes(feature)
        ? prevFeatures.filter((f) => f !== feature)
        : [...prevFeatures, feature]
    );
  };

  const renderFolderStructure = () => {
    // replace with your own logic for determining the folder structure
    return (
      <div className="bg-white mt-6 shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          {selectedFeatures.map((feature: string) => (
            <>
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                {feature}
              </h3>
              <p>Folder structure for {feature}</p>
            </>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mt-4">
        <label
          htmlFor="projectName"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Project Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="projectName"
            id="projectName"
            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="my_project"
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FeatureBlock
          title="Database Driver"
          featureOptions={databases}
          selectedFeature={selectedDB}
          updateSelectedFeature={setSelectedDB}
        />
        <FeatureBlock
          title="Web Framework"
          featureOptions={frameworks}
          selectedFeature={selectedFramework}
          updateSelectedFeature={setSelectedFramework}
        />
      </div>
      {/* {renderFolderStructure()} */}
      <div className="bg-white mt-6 shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <FolderIcon />{" "}
            {projectName ? (
              <p className="inline">{projectName}</p>
            ) : (
              <p className="inline italic text-gray-500">my_project</p>
            )}
          </div>
          <div className="ml-4">
            <div className="flex items-center">
              <FolderIcon /> <p className="inline">cmd</p>
            </div>
            <div className="flex items-center">
              <FolderIcon /> <p className="inline">internal</p>
            </div>
            <div className="flex items-center">
              <FolderIcon /> <p className="inline">tests</p>
            </div>
            <div className="flex items-center">
              <GenericIcon />
              <p className="inline">go.mod</p>
            </div>
            <div className="flex items-center">
              <GenericIcon />
              <p className="inline">go.sum</p>
            </div>
            <div className="flex items-center">
              <GenericIcon />
              <p className="inline">Makefile</p>
            </div>
            <div className="flex items-center">
              <InfoIcon />
              <p className="inline">README.md</p>
            </div>
            {selectedDB !== "none" ? (
              <div className="flex items-center">
                <DockerYamlIcon />
                <p className="inline">docker-compose.yaml</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

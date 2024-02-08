import { FeatureTuple } from "./Selection";

type FeatureBlockProps = {
  featureOptions: FeatureTuple[];
  selectedFeature: string;
  updateSelectedFeature: Function;
  title: string;
};

export default function FeatureBlock({
  featureOptions,
  selectedFeature,
  updateSelectedFeature,

  title,
}: FeatureBlockProps) {
  return (
    <div className="bg-white mt-6 shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {title}
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          {featureOptions.map((feature) => (
            <div key={feature[0]}>
              <label>
                <input
                  type="radio"
                  checked={selectedFeature === feature[0]}
                  onChange={() => updateSelectedFeature(feature[0])}
                />
                {feature[1]}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

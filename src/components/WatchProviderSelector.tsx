import { Select } from "antd";
import watchProviders from "../data/providers";

interface Props {
  onSelectWatchProvider: (watchProvider: number) => void;
  selectedWatchProvider?: number;
}

const WatchProviderSelector = ({
  onSelectWatchProvider,
  selectedWatchProvider,
}: Props) => {
  const options = [
    { value: -1, label: "All Watch Providers" },
    ...watchProviders.map((provider) => ({
      value: provider.provider_id,
      label: provider.provider_name,
    })),
  ];
  return (
    <Select
      value={options.find(
        (option) => option.value === (selectedWatchProvider || -1)
      )}
      onSelect={(_, option) => onSelectWatchProvider(option.value)}
      style={{ width: "200px" }}
      options={options}
    />
  );
};

export default WatchProviderSelector;

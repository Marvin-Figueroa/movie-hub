import { Select } from "antd";
import watchProviders from "../data/providers";

interface Props {
  onSelectWatchProvider: (watchProvider: number) => void;
}

const WatchProviderSelector = ({ onSelectWatchProvider }: Props) => {
  const options = [
    { value: -1, label: "All Watch Providers" },
    ...watchProviders.map((provider) => ({
      value: provider.provider_id,
      label: provider.provider_name,
    })),
  ];
  return (
    <Select
      defaultValue={options.find((option) => option.value === -1)}
      onSelect={(_, option) => onSelectWatchProvider(option.value)}
      style={{ width: "200px" }}
      options={options}
    />
  );
};

export default WatchProviderSelector;

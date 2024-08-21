import { Select } from "antd";
import watchProviders from "../data/providers";
import styled from "styled-components";

interface Props {
  onSelectWatchProvider: (watchProvider: number) => void;
  selectedWatchProvider?: number;
}

const CustomSelect = styled(Select)`
  width: 100%;
  min-width: 165px;
`;

const options = [
  { value: -1, label: "All Watch Providers" },
  ...watchProviders.map((provider) => ({
    value: provider.provider_id,
    label: provider.provider_name,
  })),
];

const WatchProviderSelector = ({
  onSelectWatchProvider,
  selectedWatchProvider,
}: Props) => {
  return (
    <CustomSelect
      value={options.find(
        (option) => option.value === (selectedWatchProvider || -1)
      )}
      onSelect={(_, option) => onSelectWatchProvider(option.value)}
      options={options}
    />
  );
};

export default WatchProviderSelector;

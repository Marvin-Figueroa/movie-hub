import { Select } from "antd";
import watchProviders from "../data/providers";
import styled from "styled-components";
import useMovieQueryStore from "../store";

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

const WatchProviderSelector = () => {
  const selectedWatchProvider = useMovieQueryStore(
    (s) => s.movieQuery.watchProvider
  );
  const setWatchProviderId = useMovieQueryStore((s) => s.setWatchProviderId);

  return (
    <CustomSelect
      value={options.find(
        (option) => option.value === (selectedWatchProvider || -1)
      )}
      onSelect={(_, option) => setWatchProviderId(option.value)}
      options={options}
    />
  );
};

export default WatchProviderSelector;

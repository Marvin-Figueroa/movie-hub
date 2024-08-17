import { Select } from "antd";
import watchProviders from "../data/providers";

const WatchProviderSelector = () => {
  return (
    <Select
      defaultValue={{ value: "", label: "All Watch Providers" }}
      style={{ width: "200px" }}
      options={[
        { value: "", label: "All Watch Providers" },
        ...watchProviders.map((provider) => ({
          value: provider.provider_id,
          label: provider.provider_name,
        })),
      ]}
    />
  );
};

export default WatchProviderSelector;

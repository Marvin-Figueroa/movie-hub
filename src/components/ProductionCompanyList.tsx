import { Image, Space, Tag, Tooltip } from "antd";
import { ProductionCompany } from "../types/ProductionCompany";

interface Props {
  companies: ProductionCompany[];
}

const ProductionCompanyList = ({ companies }: Props) => {
  return (
    <Space size="middle" wrap>
      {companies.map((company) =>
        company.logo_path ? (
          <Tooltip key={company.id} title={company.name}>
            <Tag color="#15b7db" style={{ padding: "5px" }}>
              <Image
                alt={company.name}
                preview={false}
                height={25}
                src={`${import.meta.env.VITE_APP_API_IMAGES_BASE_URL}/w400/${
                  company.logo_path
                }`}
              />
            </Tag>
          </Tooltip>
        ) : null
      )}
    </Space>
  );
};

export default ProductionCompanyList;

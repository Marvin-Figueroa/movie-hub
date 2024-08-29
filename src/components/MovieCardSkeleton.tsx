import { Card, Skeleton, Space } from "antd";
import styled from "styled-components";

const { Meta } = Card;

const CustomSkeletonImage = styled(Skeleton.Image)`
  &&& {
    height: 300px;
    width: 100%;
  }
`;

const CustomSkeletonButton = styled(Skeleton.Button)<{ width: number }>`
  &&& {
    width: ${({ width }) => width}px;
    margin-top: 2px;
  }
`;

const CustomCard = styled(Card)`
  overflow: hidden;
`;

export const MovieCardSkeleton = () => {
  return (
    <CustomCard hoverable cover={<CustomSkeletonImage active={true} />}>
      <Meta
        title={
          <Skeleton.Button
            active={true}
            size={"small"}
            shape={"square"}
            block={true}
          />
        }
        description={
          <Space direction="vertical">
            <CustomSkeletonButton
              active={true}
              size={"small"}
              shape={"square"}
              width={100}
            />
            <CustomSkeletonButton
              active={true}
              size={"small"}
              shape={"square"}
              width={140}
            />
          </Space>
        }
      />
    </CustomCard>
  );
};

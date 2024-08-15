import { Card, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";

export const MovieCardSkeleton = () => {
  return (
    <Card
      hoverable
      cover={
        <Skeleton.Image
          active={true}
          style={{ height: "400px", width: "300px" }}
        />
      }
    >
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
          <>
            <Skeleton.Button
              active={true}
              size={"small"}
              shape={"square"}
              style={{ marginBottom: "8px", width: "120px" }}
            />
            <Skeleton.Button
              active={true}
              size={"small"}
              shape={"square"}
              style={{ width: "180px" }}
            />
          </>
        }
      />
    </Card>
  );
};

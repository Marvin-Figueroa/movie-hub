import { Rate } from "antd";

interface Props {
  score: number;
}

const VoteScore = ({ score }: Props) => {
  return (
    <Rate
      style={{ color: "#15B7DB" }}
      allowHalf
      disabled
      defaultValue={Math.round(score) / 2}
    />
  );
};

export default VoteScore;

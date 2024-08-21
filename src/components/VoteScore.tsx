import { Rate } from "antd";
import styled from "styled-components";

interface Props {
  score: number;
}

const CustomRate = styled(Rate)`
  color: #15b7db;
`;

const VoteScore = ({ score }: Props) => {
  return <CustomRate allowHalf disabled defaultValue={Math.round(score) / 2} />;
};

export default VoteScore;

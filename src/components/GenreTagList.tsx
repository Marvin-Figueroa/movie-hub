import { Flex, Tag } from "antd";
import { Genre } from "../types/Genre";

const tagColors = [
  "gold",
  "lime",
  "green",
  "volcano",
  "cyan",
  "red",
  "blue",
  "magenta",
  "geekblue",
  "purple",
  "orange",
];

interface Props {
  genres: Genre[];
}

const GenreTagList = ({ genres }: Props) => {
  return (
    <Flex gap="4px 0">
      {genres.map((genre, index) => (
        <Tag key={genre.id} color={tagColors[index]}>
          {genre.name}
        </Tag>
      ))}
    </Flex>
  );
};

export default GenreTagList;

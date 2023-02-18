import { BsStar, BsStarFill } from "react-icons/bs";

export default function StarRating(props) {
  const { rating } = props;
  if (rating != null) {
    if (rating.includes("5")) {
      return (
        <div display="flex">
          <BsStarFill color="gold" /> <BsStarFill color="gold" />{" "}
          <BsStarFill color="gold" /> <BsStarFill color="gold" />{" "}
          <BsStarFill color="gold" />
        </div>
      );
    } else if (rating.includes("4")) {
      return (
        <div display="flex">
          <BsStarFill color="gold" /> <BsStarFill color="gold" />{" "}
          <BsStarFill color="gold" /> <BsStarFill color="gold" /> <BsStar />
        </div>
      );
    } else if (rating.includes("3")) {
      return (
        <div display="flex">
          <BsStarFill color="gold" /> <BsStarFill color="gold" />{" "}
          <BsStarFill color="gold" /> <BsStar /> <BsStar />
        </div>
      );
    } else if (rating.includes("2")) {
      return (
        <div display="flex">
          <BsStarFill color="gold" /> <BsStarFill color="gold" /> <BsStar />{" "}
          <BsStar /> <BsStar />
        </div>
      );
    } else if (rating.includes("2")) {
      return (
        <div display="flex">
          <BsStarFill color="gold" /> <BsStar /> <BsStar /> <BsStar />{" "}
          <BsStar />
        </div>
      );
    } else if (rating.includes("1")) {
      return (
        <div display="flex">
          <BsStarFill color="gold" /> <BsStar /> <BsStar /> <BsStar />{" "}
          <BsStar />
        </div>
      );
    } else {
      return (
        <div
          sx={{
            display: "grid",
            gridTemplateRow: "1fr"
          }}
        >
          <BsStar /> <BsStar /> <BsStar /> <BsStar /> <BsStar />
        </div>
      );
    }
  } else {
    return (
      <div
        sx={{
          display: "grid",
          gridTemplateRow: "1fr"
        }}
      >
        <BsStar /> <BsStar /> <BsStar /> <BsStar /> <BsStar />
      </div>
    );
  }
}

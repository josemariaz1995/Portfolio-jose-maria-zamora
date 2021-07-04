export const Dots = (props) => {
  const { index, i, setIndex } = props;
  return (
    <div
      className={`slideshowDot${index === i ? " active" : ""}`}
      onClick={() => {
        setIndex(i);
      }}
    ></div>
  );
};

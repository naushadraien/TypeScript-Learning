type ShapeType = "circle" | "square" | "triangle";
type TwoDimShape = Exclude<ShapeType, "circle">; //here exclude circle from ShapeType and assign to TwoDimShape type

type Theme = "light" | "dark";
type Color = "red" | "green" | "blue";

type ShapeProps = {
  color: Exclude<`${Theme}-${Color}`, "dark-green">;
  shape: Exclude<`${ShapeType}-${TwoDimShape}`, "square-square">;
};

const Shape = (props: ShapeProps) => {
  return (
    <div>
      <h1>{props.color}</h1>
      <h1>{props.shape}</h1>
    </div>
  );
};

export default Shape;

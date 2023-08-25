import Item from "./Item";

const ItemList = () => {
  return (
    <div className="flex justify-center items-center my-2">
      <Item
        id={1}
        title="king"
        extra={[
          {
            id: 1,
            name: "king",
          },
        ]}
      />
    </div>
  );
};

export default ItemList;

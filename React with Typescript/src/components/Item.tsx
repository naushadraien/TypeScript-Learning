import ItemList from "./ItemList";

type ItemProps<T> = {
  id: number;
  title: string;
  extra: T[];
};

const Item = ({ id, title }: ItemProps<object>) => {
  return (
    <div>
      <h1>{id}</h1>
      <p>{title}</p>
    </div>
  );
};

export default Item;

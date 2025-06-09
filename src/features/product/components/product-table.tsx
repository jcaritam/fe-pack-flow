import type { IProduct } from "../types/product";
import type { IColumn } from "@/shared/components/custom-table";
import CustomTable from "@/shared/components/custom-table";

const cols: IColumn<IProduct>[] = [
  {
    name: "name",
    label: "Nombre",
  },
  {
    name: "description",
    label: "Descripcion",
  },
  {
    name: "category",
    label: "Categoria",
  },
];

interface Props {
  products: IProduct[];
}
const ProductTable = ({ products }: Props) => {
  const onEdit = (item: IProduct) => {
    console.log({ item })
  }
  return (
    <div className="rounded-md border">
      <CustomTable<IProduct>
        data={products}
        cols={cols}
        onEdit={onEdit}
        
      />
    </div>
  );
};

export default ProductTable;

import { useProduct } from "../features/product/hooks/product";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Filter, Plus, Search } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/shared/components/ui/select";

import ProductTable from "@/features/product/components/product-table";
import ProductDialogForm from "@/features/product/components/product-dialog-form";
import { useModal } from "@/hooks/modal";

const ProductPage = () => {
  const { openModal } = useModal();
  const { data, isPending, refetch} = useProduct();

  const handleClickAddProduct = () => {
    openModal(<ProductDialogForm/>, {
      refetch
    })
  }

  if (isPending) return <span>Loading....</span>;


  return (
    <div className="p-4 flex flex-col gap-[15px] md:gap-[20px]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold">Productos</h1>
        <Button onClick={handleClickAddProduct}>
          <Plus className="mr-2 h-4 w-4" />
          Agregar Producto
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 md:max-w-sm">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar productos..."
                className="pl-8"
                autoComplete="false"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Filtrar por:</span>
              </div>
              {/* value={selectedCategory} onValueChange={setSelectedCategory} */}
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todas las categorías</SelectItem>
                  <SelectItem value="Electrónicos">Electrónicos</SelectItem>
                  <SelectItem value="Ropa">Ropa</SelectItem>
                  <SelectItem value="Hogar">Hogar</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <ProductTable products={data ?? []} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductPage;

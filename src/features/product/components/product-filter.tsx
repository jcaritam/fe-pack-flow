import { Input } from "@/shared/components/ui/input";
import { Filter, Search } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/shared/components/ui/select";

const ProductFilters = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
      <div className="relative flex-1 md:max-w-sm">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Buscar productos..." className="pl-8" />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Filtrar por:</span>
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todas las categorías</SelectItem>
            <SelectItem value="electronicos">Electrónicos</SelectItem>
            <SelectItem value="ropa">Ropa</SelectItem>
            <SelectItem value="hogar">Hogar</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductFilters;

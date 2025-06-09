import { Edit, MoreVertical, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import type { JSX } from "react";

export interface IColumn<T> {
  name: keyof T & string;
  label: string;
  render?: (value: T[keyof T], item: T, index: number) => JSX.Element | string | number | null;
}

interface Props<T = unknown> {
  data: T[];
  cols: IColumn<T>[];
  onEdit: (item: T) => void;
  onDelete?: (item: T) => void;
  onView?: (item: T) => void;
}

const CustomTable = <T,>({
  data,
  cols,
  onEdit,
  onDelete,
  onView,
}: Props<T>) => {

  const renderCell = ({ name, render }: IColumn<T>, item: T, index: number) => {
    if (render) return render(item[name], item, index)
    if (!item[name]) return '---'
    return item[name] as React.ReactNode;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            {cols.map(({ label, name }, i) => (
              <TableHead key={`${i}_${name}`}>{label}</TableHead>
            ))}
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              {cols.map((col) => (
                <TableCell>
                  {
                    renderCell(col, item, i)
                  }
                </TableCell>
              ))}
              <TableCell>
                <TableActionsDropdown<T>
                  item={item}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onView={onView}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;

interface DropdownProps<T> {
  item: T;
  onEdit: (item: T) => void;
  onDelete?: (item: T) => void;
  onView?: (item: T) => void;
}
const TableActionsDropdown = <T,>({
  item,
  onEdit,
  onDelete,
  onView,
}: DropdownProps<T>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Abrir menú</span>
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => onEdit(item)}>
          <Edit className="mr-2 h-4 w-4" />
          <span>Editar</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onView && onView(item)}>
          <span>Ver detalles</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-destructive"
          onClick={() => onDelete && onDelete(item)}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Eliminar</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

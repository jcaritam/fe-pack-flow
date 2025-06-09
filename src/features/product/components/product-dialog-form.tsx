import { DialogFooter } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/shared/components/ui/select";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProduct } from "../hooks/product-mutation";
import type { IProductForm } from "../types/product";
import { useModal } from "@/hooks/modal";

const schema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  description: z.string().optional(),
  category: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface IDataModal {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  refetch: () => void;
}

const ProductDialogForm = () => {
  const { data, closeModal } = useModal<IDataModal>();
  const { refetch } = data!;
  const { mutateAsync, isPending } = useCreateProduct();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
    },
  });

  const categoryValue = watch("category");

  const onSubmit = async (data: FormValues) => {
    await mutateAsync(data as IProductForm);
    reset();
    refetch();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Nombre
        </Label>
        <Input id="name" className="col-span-3" {...register("name")} />
        {errors.name && (
          <p className="col-span-4 text-red-500 text-sm ml-[30%]">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right">
          Descripción
        </Label>
        <Textarea
          id="description"
          className="col-span-3"
          {...register("description")}
        />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="category" className="text-right">
          Categoría
        </Label>
        <Select
          value={categoryValue}
          onValueChange={(value) => setValue("category", value)}
        >
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Seleccionar categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Hombre">Hombre</SelectItem>
            <SelectItem value="Mujer">Mujer</SelectItem>
            <SelectItem value="Niño">Niño</SelectItem>
          </SelectContent>
        </Select>
        {errors.category && (
          <p className="col-span-4 text-red-500 text-sm ml-[30%]">
            {errors.category.message}
          </p>
        )}
      </div>

      <DialogFooter>
        <Button
          type="button"
          variant="outline"
          onClick={closeModal}
        >
          Cancelar
        </Button>
        <Button type="submit" disabled={isPending || !isValid}>Guardar Producto</Button>
      </DialogFooter>
    </form>
  );
};

export default ProductDialogForm;
// <Dialog open={open} onOpenChange={(value) => {
//   if (!value) reset();
//   onOpenChange(value);
// }}>
//   <DialogContent className="sm:max-w-[500px]">
//     <DialogHeader>
//       <DialogTitle>Agregar Nuevo Producto</DialogTitle>
//       <DialogDescription>
//         Completa los detalles del producto. Haz clic en guardar cuando
//         termines.
//       </DialogDescription>
//     </DialogHeader>

//   </DialogContent>
// </Dialog>

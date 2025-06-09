import { useProviders } from "@/features/provider/hooks";
import CustomSelect from "@/shared/components/inputs/select";
import { useFieldArray, useForm } from "react-hook-form";
import { EClientOrderStatus, type ICreateRequest } from "../types";
import { Label } from "@/shared/components/ui/label";
import { Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import { Input } from "@/shared/components/ui/input";
import { useProduct } from "@/features/product/hooks/product";
import type { IProduct } from "@/features/product/types/product";
import { useId } from "react";
import { useCreateRequest } from "../hooks";
import { useModal } from "@/hooks/modal";

const RequestForm = () => {
  const uuid = useId();
  const { closeModal } = useModal();
  const { mutateAsync, isPending: isPendingCreate } = useCreateRequest();
  const {
    setValue,
    watch,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreateRequest>({
    defaultValues: {
      items: [{ productId: "", requestQuantity: 1 }],
    },
  });
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "items",
  });
  const { data } = useProduct();
  const { providers } = useProviders();

  const provider = watch("providerId");

  const addNewItem = () => {
    append({ productId: "", requestQuantity: 1 });
  };

  const updateItem = <K extends keyof ICreateRequest["items"][0]>(
    index: number,
    key: K,
    value: ICreateRequest["items"][0][K]
  ) => {
    const currentItem = watch(`items.${index}`);
    update(index, {
      ...currentItem,
      [key]: value,
    });
  };

  const removeItem = (index: number) => remove(index);

  const onSubmit = async (data: ICreateRequest) => {
    console.log({ data })

    await mutateAsync({ ...data, status: EClientOrderStatus.SENT });
  }

  const handleCancel = () => {
    closeModal()
    reset()
  }

  return (
    <form className="flex flex-col gap-[15px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CustomSelect
        label="Seleccionar proveedor"
        value={provider}
        items={providers ?? []}
        optionValue="providerId"
        optionLabel="name"
        error={!!errors.providerId}
        errorMessage={errors.providerId?.message ?? ""}
        onChange={(value) => setValue("providerId", value)}
      />
      <Separator />
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <Label className="text-sm font-semibold flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Productos
            ({fields.length})
          </Label>
          <Button
            onClick={addNewItem}
            size="sm"
            variant="outline"
            type="button"
          >
            <Plus className="h-3 w-3 mr-1" />
            Agregar
          </Button>
        </div>
        <div className="space-y-3 max-h-[300px] overflow-auto">
          {fields.map((field, index) => (
            <div key={uuid}>
              <div className="flex items-center gap-3">

                <div className="flex-1 min-w-0">
                  <CustomSelect<IProduct>
                    items={data ?? []}
                    optionValue="productId"
                    optionLabel="name"
                    value={field.productId}
                    onChange={(value) => updateItem(index, "productId", value)}
                    error={!!errors.items?.[index]?.productId}
                    errorMessage={
                      errors.items?.[index]?.productId?.message ?? ""
                    }
                  />
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                    type="button"
                    onClick={() =>
                      updateItem(
                        index,
                        "requestQuantity",
                        Math.max(1, field.requestQuantity - 1)
                      )
                    }
                  >
                    -
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={watch(`items.${index}.requestQuantity`)}
                    onChange={(e) =>
                      updateItem(
                        index,
                        "requestQuantity",
                        Number.parseInt(e.target.value) || 1
                      )
                    }
                    className="h-8 w-15 text-center text-sm"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                    type="button"
                    onClick={() =>
                      updateItem(
                        index,
                        "requestQuantity",
                        field.requestQuantity + 1
                      )
                    }
                  >
                    +
                  </Button>
                </div>

                {fields.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-6 p-0 text-red-500"
                    onClick={() => removeItem(index)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <Button
          type="button"
          variant='outline'
          onClick={handleCancel}
        >
          Cancelar
        </Button>
        <Button
          disabled={isPendingCreate}
        >
        Crear solicitud
      </Button>
      </div>
    </form>
  );
};

export default RequestForm;

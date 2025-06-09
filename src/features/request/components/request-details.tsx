import { useSidePanel } from "@/hooks";
import type { IRequest } from "../types";
import { Input } from "@/shared/components/ui/input";
import { Switch } from "@/shared/components/ui/switch";
import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { Check } from "lucide-react";

interface IDataModal {
  selected: IRequest;
}

const RequestDetails = () => {
  const { options, closeSidePanel } = useSidePanel<IDataModal>();
  const { data } = options!;
  const packs = data?.selected.items;
  console.log({ data });

  return (
    <div className="px-4 flex flex-col gap-6 max-h-full overflow-auto">
      <div className="flex flex-col gap-4 overflow-y-auto">
        {packs?.map((p) => (
          <div className="border flex flex-col gap-5 p-4 rounded-md">
            <div className="flex justify-between">
              <span className="text-lg font-bold">{p.product.name}</span>
              <div className="flex gap-2 items-center">
                <Label className="text-xs text-gray-500">Disponible</Label>
                <Switch  />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Cantidad</Label>
              <div className="flex justify-between">
                <Button>-</Button>
              <span>{p.requestQuantity}</span>
              <Button>+</Button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Precio del paquete</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </span>
                <Input type="number" placeholder="00" className="pl-7" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <Button className="">
          <Check/>
          Confirmar
        </Button>
        <Button variant="outline" type="button" onClick={closeSidePanel}>Cancelar</Button>
      </div>
    </div>
  );
};

export default RequestDetails;

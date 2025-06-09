import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import { format } from "date-fns";
import {
  AlertCircle,
  Calculator,
  CheckCircle,
  Clock,
  Eye,
  Loader2,
  PackageCheck,
  Truck,
  XCircle,
} from "lucide-react";
import { EClientOrderStatus } from "../types";
import { Badge } from "@/shared/components/ui/badge";

interface Props {
  provider: string;
  countItems: number;
  orderDate: string;
  status: EClientOrderStatus;
  onView: () => void;
  onConfirm: () => void;
}
const RequestCard = ({
  provider,
  orderDate,
  countItems,
  status,
  onView,
  onConfirm,
}: Props) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>SOL-23132</CardTitle>
          {getStatusBadge(status)}
        </div>
        <CardDescription>
          {format(new Date(orderDate), "dd/MM/yyyy")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 text-base">
          <div className="flex justify-between">
            <span className="font-medium">Proveedor:</span>
            <span>{provider}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Paquetes:</span>
            <span>{countItems}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Valor:</span>
            <span className="font-bold"> 327</span>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="overflow-hidden">
        <div className="w-full flex flex-row items-center justify-center gap-5">
          <Button
            variant="ghost"
            className="text-lg py-1 flex items-center justify-center"
            onClick={onView}
          >
            <Eye className="mr-2 h-5 w-5" />
            Ver Detalle
          </Button>
          {status === EClientOrderStatus.SENT && (
            <Button
              variant="default"
              className="text-lg py-1 flex items-center justify-center"
              onClick={onConfirm}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Confirmar
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default RequestCard;

export const getStatusBadge = (status: EClientOrderStatus) => {
  switch (status) {
    case "DRAFT":
      return (
        <Badge variant="outline" className="text-base py-1 px-3">
          <Clock className="w-4 h-4 mr-2" />
          Borrador
        </Badge>
      );

    case "SENT":
      return (
        <Badge variant="secondary" className="text-base py-1 px-3">
          <AlertCircle className="w-4 h-4 mr-2" />
          Enviado
        </Badge>
      );

    case "CONFIRMED":
      return (
        <Badge variant="default" className="text-base py-1 px-3">
          <CheckCircle className="w-4 h-4 mr-2" />
          Confirmado
        </Badge>
      );

    case "PARTIALLY_CONFIRMED":
      return (
        <Badge className="text-base py-1 px-3 dark:bg-amber-400">
          <AlertCircle className="w-4 h-4 mr-2" />
          Confirmado parcial
        </Badge>
      );

    case "IN_TRANSIT":
      return (
        <Badge variant="outline" className="text-base py-1 px-3">
          <Truck className="w-4 h-4 mr-2" />
          En tránsito
        </Badge>
      );

    case "RECEIVED":
      return (
        <Badge variant="outline" className="text-base py-1 px-3">
          <PackageCheck className="w-4 h-4 mr-2" />
          Recibido
        </Badge>
      );

    case "CANCELLED":
      return (
        <Badge variant="destructive" className="text-base py-1 px-3">
          <XCircle className="w-4 h-4 mr-2" />
          Cancelado
        </Badge>
      );

    default:
      return (
        <Badge variant="secondary" className="text-base py-1 px-3">
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          {status}
        </Badge>
      );
  }
};

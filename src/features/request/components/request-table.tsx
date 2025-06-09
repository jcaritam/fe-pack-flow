import { format } from "date-fns";
import CustomTable, { type IColumn } from "@/shared/components/custom-table";
import type { EClientOrderStatus, IRequest } from "../types";
import { useIsMobile } from "@/hooks/use-mobile";
import RequestListCards from "./request-list-cards";
import { useSidePanel } from "@/hooks";
import RequestDetails from "./request-details";

interface IRequestTable {
  clientOrderId: string;
  orderDate: string;
  countItems: number;
  providerName: string;
  status: EClientOrderStatus;
}

const cols: IColumn<IRequestTable>[] = [
  {
    name: "orderDate",
    label: "Fecha de solicitud",
    render: (value) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    name: "providerName",
    label: "Proveedor",
  },
  {
    name: "countItems",
    label: "N. Paquetes",
    render: (item) => item,
  },
  {
    name: "status",
    label: "Estado",
  },
];

interface Props {
  requests: IRequest[];
}

const RequestTable = ({ requests }: Props) => {
  const isMobile = useIsMobile();
  const { openSidePanel } = useSidePanel();
  const requestsData: IRequestTable[] = requests.map(
    ({ provider, items, orderDate, status, clientOrderId }) => ({
      clientOrderId,
      providerName: provider.name,
      orderDate,
      countItems: items.length,
      status,
    })
  );

  const onEdit = (item: IRequestTable) => {
    console.log({ item });
  };

  const onView = (item: IRequestTable | IRequest) => {
    const selected = requests.find(
      (req) => req.clientOrderId === item.clientOrderId
    );

    if (!selected) return;

    openSidePanel(<RequestDetails />, {
      title: "Detalle de solicitud",
      data: {
        selected,
      },
    });
  };

  const onConfirm = (item: IRequest) => {
    const selected = requests.find(
      (req) => req.clientOrderId === item.clientOrderId
    );

    if (!selected) return;

    openSidePanel(<RequestDetails />, {
      title: "Confirmacion de solicitud",
      data: {
        selected,
      },
    });
  };

  if (isMobile)
    return (
      <RequestListCards
        requests={requests}
        onView={onView}
        onConfirm={onConfirm}
      />
    );

  return (
    <CustomTable<IRequestTable>
      data={requestsData}
      cols={cols}
      onEdit={onEdit}
      onView={onView}
    />
  );
};

export default RequestTable;

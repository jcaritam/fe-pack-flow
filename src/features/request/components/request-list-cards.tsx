import type { IRequest } from "../types";
import RequestCard from "./request-card";

interface Props {
  requests: IRequest[];
  onView: (item: IRequest) => void;
  onConfirm: (item: IRequest) => void;
}

const RequestListCards = ({ requests, onView, onConfirm }: Props) => {
  return (
    <div className="flex flex-col gap-[20px]">
      {requests.map((request) => (
        <RequestCard
          key={request.clientOrderId}
          orderDate={request.orderDate}
          countItems={request.items.length}
          provider={request.provider.name}
          status={request.status}
          onView={() => onView(request)}
          onConfirm={() => onConfirm(request)}
        />
      ))}
    </div>
  );
};

export default RequestListCards;

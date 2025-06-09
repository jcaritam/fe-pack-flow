import { RequestTable } from "@/features/request/components";
import RequestForm from "@/features/request/components/request-form";
import { useRequest } from "@/features/request/hooks/request.hook";
import { useModal } from "@/hooks/modal";
import Loader from "@/shared/components/loader";
import { Button } from "@/shared/components/ui/button";

const RequestPage = () => {
  const { data, isPending } = useRequest();
  const { openModal } = useModal();

  if (isPending) return <Loader />;

  const handleClickAddRequest = () => {
    openModal(<RequestForm />);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-[20px]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
         <div>
          <h1 className="text-3xl font-bold tracking-tight">Solicitudes</h1>
          <p className="text-muted-foreground text-lg">Gestiona tus pedidos a proveedores</p>
        </div>
        <Button
          onClick={handleClickAddRequest}
          className="text-lg py-6 w-full sm:w-auto"
        >
          Nueva solicitud
        </Button>
      </div>
      <div>
        <RequestTable requests={data ?? []} />
      </div>
    </div>
  );
};

export default RequestPage;

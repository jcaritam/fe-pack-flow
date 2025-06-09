import { useModal } from "@/hooks/modal"
import { Dialog, DialogContent, DialogPortal } from "./ui/dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";

const GlobalModal = () => {
  const { isOpen, closeModal, component } = useModal();
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogPortal>
        <DialogOverlay/>
        <DialogContent>
          { component && component }
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export default GlobalModal
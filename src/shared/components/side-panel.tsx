import { useSidePanel } from "@/hooks";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

export const SidePanel = () => {
  const { isOpen, component, closeSidePanel, options } = useSidePanel();

  return (
    <Sheet open={isOpen} onOpenChange={closeSidePanel}>
      <SheetContent className="w-[100%] sm:w-[30%] !max-w-none">
        {options?.title && (
          <SheetHeader>
            <SheetTitle>{options.title}</SheetTitle>
          </SheetHeader>
        )}
        {component && component}
      </SheetContent>
    </Sheet>
  );
};

import { sidePanelStore, type SidePanelStore } from "@/shared/store/side-panel";
import { useStore } from "zustand";

export const useSidePanel = <T = unknown>() => {
  return useStore(sidePanelStore) as SidePanelStore<T>;
}
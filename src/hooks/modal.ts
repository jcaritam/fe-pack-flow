import { useModalStore, type ModalStore } from "@/shared/store/modal";
import { useStore } from "zustand";

export const useModal = <T = unknown>() => useStore(useModalStore) as ModalStore<T>;
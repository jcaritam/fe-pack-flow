import { Label } from "../ui/label";
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Props<T> {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error: boolean;
  errorMessage: string;
  optionValue: keyof T;
  optionLabel: keyof T;
  items: T[];
}

const CustomSelect = <T,>({
  label,
  placeholder,
  onChange,
  value,
  error,
  errorMessage,
  items,
  optionLabel,
  optionValue,
}: Props<T>) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      {label && (
        <Label htmlFor={label} className="text-right col-span-2">
          {label}
        </Label>
      )}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full col-span-full">
          <SelectValue placeholder={placeholder ?? "Selecionar"} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item, idx) => (
            <SelectItem key={idx} value={String(item[optionValue])}>
              {String(item[optionLabel])}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && errorMessage.length && (
        <p className="col-span-4 text-red-500 text-sm ml-[30%]">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default CustomSelect;

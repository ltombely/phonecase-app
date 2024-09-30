import { Check } from "lucide-react";

export default function CheckList() {
  return (
    <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
      <div className="space-y-2">
        <li className="flex gap-1.5 items-center text-left">
          <Check className="h-5 w-5 shrink-0 text-green-600" />
          Alta qualidade, material de alta durablidade
        </li>
        <li className="flex gap-1.5 items-center text-left">
          <Check className="h-5 w-5 shrink-0 text-green-600" />
          Garantia de impressão de 5 anos
        </li>
        <li className="flex gap-1.5 items-center text-left">
          <Check className="h-5 w-5 shrink-0 text-green-600" />
          Suporte para modelos modernos de iPhone
        </li>
      </div>
    </ul>
  );
}

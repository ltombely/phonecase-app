import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CheckList() {
  const t = useTranslations();
  return (
    <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
      <div className="space-y-2">
        <li className="flex gap-1.5 items-center text-left">
          <Check className="h-5 w-5 shrink-0 text-green-600" />
          {t("High Quality, durable material")}
        </li>
        <li className="flex gap-1.5 items-center text-left">
          <Check className="h-5 w-5 shrink-0 text-green-600" />
          {t("5 year print guarantee")}
        </li>
        <li className="flex gap-1.5 items-center text-left">
          <Check className="h-5 w-5 shrink-0 text-green-600" />
          {t("Modern iPhone models supported")}
        </li>
      </div>
    </ul>
  );
}

"use client";
import React from "react";
import Phone from "@/components/Phone";
import { Button } from "@/ui/button";
import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { cn, formatPrice } from "@/lib/utils";
import { COLORS, FINISHES, MODELS } from "@/validators/option-validator";
import { Configuration } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { createCheckoutSession } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import LoginModal from "@/components/LoginModal";
import { useRouter } from "next/navigation";

type DesignPreviewProps = {
  configuration: Configuration;
};

export default function DesignPreview({ configuration }: DesignPreviewProps) {
  const router = useRouter();
  const { toast } = useToast();
  const { id } = configuration;
  const { user } = useKindeBrowserClient();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const { color, model, finish, material } = configuration;
  useEffect(() => setShowConfetti(true));

  const tw = COLORS.find(
    (supportedColor) => supportedColor.value === color
  )?.tw;

  const { label: modelLabel } = MODELS.options.find(
    ({ value }) => value === model
  )!;

  let totalPrice = BASE_PRICE;
  if (material === "polycarbonate")
    totalPrice += PRODUCT_PRICES.material.polycarbonate;

  if (finish === "textured") totalPrice += PRODUCT_PRICES.finish.textured;

  const { mutate: createPaymentSession } = useMutation({
    mutationKey: ["get-checkou-session"],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) router.push(url);
      else throw new Error("Não é possível recuperar o URL de pagamento");
    },
    onError: () => {
      toast({
        title: "Algo aconteceu de errado :(",
        description:
          "Houve um erro no nosso servidor, por favor, tente novamente",
        variant: "destructive",
      });
    },
  });

  const handleCheckout = () => {
    if (user) {
      createPaymentSession({ configId: id });
    } else {
      localStorage.setItem("configurationId", id);
      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
      <div
        aria-hidden={true}
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
      >
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>
      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />

      <div className="mt-20 flex flex-col items-center md:grid grid-cols-1 text:sm sm:grid-cols-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
          <Phone
            imgSrc={configuration.croppedImageUrl!}
            className={cn(`bg-${tw}`, "max-w-[150px] md:max-w-full")}
          />
        </div>
        <div className="mt-6 sm:col-span-9 md:row-end-1">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            Nova capa do seu {modelLabel}
          </h3>
          <div className="mt-3 flex items-center gap-1.5 text-base">
            <Check className="size-4 text-green-500" />
            Em estoque e pronto para envio
          </div>
        </div>
        <div className="sm:col-span-12 md:col-span-9 text-base ">
          <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
            <div>
              <p className="font-medium text-zinc-950">Destaques</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside ">
                <li>Compatível com carregamento sem fio</li>
                <li>
                  Absorção de choques{" "}
                  <abbr title="Termoplástico Poliuretano (material elástico com maior resistência à impactos)" className="underline">
                    TPU
                  </abbr>
                </li>
                <li>Embalagem feita com material reciclado</li>
                <li>Garantia de impressão de 5 anos</li>
              </ol>
            </div>
            <div>
              <p className="font-medium text-zinc-950">Materiais</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>Material durável de alta qualidade</li>
                <li>Revestimento protetor contra riscos e impressão digital</li>
              </ol>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
              <div className="flow-root text-sm">
                <div className="flex items-center justify-between py-1 mt-2">
                  <p className="text-gray-600">Preço Base</p>
                  <p className="font-medium text-gray-900">
                    {formatPrice(BASE_PRICE / 100)}
                  </p>
                </div>

                {finish === "textured" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">Acabamento Texturizado</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                    </p>
                  </div>
                ) : null}

                {material === "polycarbonate" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">
                      Material feito de Policarbonato Macio
                    </p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.material.polycarbonate / 100)}
                    </p>
                  </div>
                ) : null}

                <div className="my-2 h-px  bg-gray-200" />

                <div className="flex items-center justify-between p-y-2">
                  <p className="font-semibold text-gray-900">Pedido Total</p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(totalPrice / 100)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end pb-12">
              <Button
                isLoading={false}
                loadingText="loading"
                className="px-4 sm:px-6 lg:px-8"
                onClick={handleCheckout}
              >
                Comprar <ArrowRight className="size-4 ml-1.5 inline" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

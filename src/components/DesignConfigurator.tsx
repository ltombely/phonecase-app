"use client";

import { cn, formatPrice } from "@/lib/utils";
import { AspectRatio } from "./ui/aspect-ratio";
import NextImage from "next/image";
import { Rnd } from "react-rnd";
import ResizeHandleComponent from "./ResizeHandleComponent";
import { ScrollArea } from "./ui/scroll-area";
import {
  Label as RadioGroupLabel,
  Radio,
  RadioGroup,
  Description,
} from "@headlessui/react";
import { useState } from "react";
import {
  COLORS,
  MODELS,
  MATERIALS,
  FINISHES,
} from "@/validators/option-validator";
import { Label } from "./ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ArrowRight, Check, ChevronsUpDown } from "lucide-react";
import { BASE_PRICE } from "@/config/products";

type DesignConfiguratorProps = {
  imageUrl: string;
  configId: string;
  imageDimensions: {
    width: number;
    height: number;
  };
};

type OptionProps = {
  color: (typeof COLORS)[number];
  model: (typeof MODELS.options)[number];
  material: (typeof MATERIALS.options)[number];
  finish: (typeof FINISHES.options)[number];
};

export default function DesignConfigurator({
  imageUrl,
  configId,
  imageDimensions,
}: DesignConfiguratorProps) {
  const [options, setOptions] = useState<OptionProps>({
    color: COLORS[0],
    model: MODELS.options[0],
    material: MATERIALS.options[0],
    finish: FINISHES.options[0],
  });

  return (
    <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20">
      <div className="relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <div className="relative w-60  bg-opacity-50 pointer-events-none aspect-[896/1831]">
          <AspectRatio
            ratio={896 / 1831}
            className="pointer-events-none relative z-50 aspect-[896/1831] w-full"
          >
            <NextImage
              src="/phone-template.png"
              fill
              alt="phone image"
              className="pointer-events-none z-50 select-none"
            />
          </AspectRatio>
          <div className="absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,221,235,0.6)]" />

          <div
            className={cn(
              "absolute inset-0 left-[3px] top-px bottom-px right-[3px] rounded-[32px]",
              `bg-${options.color.tw}`
            )}
          />
        </div>
        <Rnd
          default={{
            x: 150,
            y: 205,
            width: imageDimensions.width / 4,
            height: imageDimensions.height / 4,
          }}
          lockAspectRatio
          resizeHandleComponent={{
            topLeft: <ResizeHandleComponent />,
            topRight: <ResizeHandleComponent />,
            bottomLeft: <ResizeHandleComponent />,
            bottomRight: <ResizeHandleComponent />,
          }}
          className="absolute z-20 border-[2px] border-primary"
        >
          <div className="relative size-full">
            <NextImage
              fill
              src={imageUrl}
              className="pointer-events-none "
              alt="Your image"
            />
          </div>
        </Rnd>
      </div>
      <div className="h-[37.5rem] w-full col-span-full flex flex-col bg-white-blue ">
        <ScrollArea className="relative flex-1 overflow-auto ">
          <div
            aria-hidden="true"
            className="absolute z-10 inset-x-0 bottom-0 h-12 pointer-events-none "
          />
          <div className="px-8 pb-12 pt-8">
            <h2 className="tracking-tight font-bold text-3xl">
              Customize your case
            </h2>
            <div className="w-full h-px bg-zinc-200 my-6" />

            <div className="relative mt-4  h-full flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <RadioGroup
                  value={options.color}
                  onChange={(val) => {
                    setOptions((prev) => ({
                      ...prev,
                      color: val,
                    }));
                  }}
                >
                  <Label>Color: {options.color.label}</Label>
                  <div className="mt-3 flex items-center space-x-3">
                    {COLORS.map((color) => (
                      <Radio
                        key={color.label}
                        value={color}
                        className={({ checked }) =>
                          cn(
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent",
                            {
                              [`border-${color.tw}`]: checked,
                            }
                          )
                        }
                      >
                        <span
                          className={cn(
                            `bg-${color.tw}`,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </Radio>
                    ))}
                  </div>
                </RadioGroup>
                <div className="relative flex flex-col gap-3">
                  <Label>Model</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-bwtween"
                      >
                        {options.model.label}
                        <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {MODELS.options.map((model) => (
                        <DropdownMenuItem
                          key={model.label}
                          className={cn(
                            "flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100",
                            {
                              "bg-zinc-100":
                                model.label === options.model.label,
                            }
                          )}
                          onClick={() => {
                            setOptions((prev) => ({
                              ...prev,
                              model,
                            }));
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 size-4",
                              model.label === options.model.label
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {model.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {[MATERIALS, FINISHES].map(
                  ({ name, options: selectableOptions }) => (
                    <RadioGroup
                      key="name"
                      value={options[name]}
                      onChange={(val) => {
                        setOptions((prev) => ({
                          ...prev,
                          [name]: val,
                        }));
                      }}
                    >
                      <Label>
                        {name.slice(0, 1).toUpperCase() + name.slice(1)}
                      </Label>
                      <div className="mt-3 space-y-4">
                        {selectableOptions.map((option) => (
                          <Radio
                            key={option.value}
                            value={option}
                            className={({ checked }) =>
                              cn(
                                "relative block cursor-pointer rounded-lg bg-white px-6 py-4 shadow-sm border-2 border-zinc-200 focus:outline-none ring-0 focus:ring-0 ouline-none sm:flex sm: justify-between ",
                                {
                                  "border-primary": checked,
                                }
                              )
                            }
                          >
                            <span className="flex items-center">
                              <span className="flex flex-col text-sm">
                                <RadioGroupLabel
                                  as="span"
                                  className="font-medium text-gray-900"
                                >
                                  {option.label}
                                </RadioGroupLabel>
                                {option.description ? (
                                  <Description className="text-gray-500">
                                    <span className="block sm:inline">
                                      {option.description}
                                    </span>
                                  </Description>
                                ) : null}
                              </span>
                            </span>

                            <Description
                              as="span"
                              className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
                            >
                              <span className="font-medium text-gray-900">
                                {formatPrice(option.price / 100)}
                              </span>
                            </Description>
                          </Radio>
                        ))}
                      </div>
                    </RadioGroup>
                  )
                )}
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="w-full px-8 h-16 bg-white">
          <div className="h-px w-full bg-zinc-200" />
          <div className="size-full flex justify-end items-center">
            <div className="w-full flex gap-6 items-center">
              <p className="font-medium whitespace-nowrap">
                {formatPrice(
                  (BASE_PRICE + options.material.price + options.finish.price) /
                    100
                )}
              </p>
              <Button className="w-full" size="sm">
                Continue
                <ArrowRight className="size-4 ml-1.5 inline" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

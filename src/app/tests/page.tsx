"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Tests() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = useMemo(() => {
    console.log("Calculando valor caro...");
    return count * 2;
  }, [count]);
  return (
    <div className="w-screen h-screen justify-center items-center text-white text-balance bg-zinc-400">
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar Contador</button>
      <h2>Resultado da calculadora cara: {expensiveCalculation}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite algo"
      />
    </div>
  );
}

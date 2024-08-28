"use client";

import React from "react";
import CountUp from "react-countup";

const Stats: React.FC = () => {
  return (
    <section className="w-full bg-background z-[9999] relative py-12 border border-transparent border-solid border-y-gray-300">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 text-center sm:grid-cols-1">
          <div className="bg-white p-2">
            <h3 className="text-4xl font-bold mb-2">
              <CountUp
                start={0}
                end={5000}
                duration={2.5}
                separator=","
                formattingFn={(value: number) => {
                  return value >= 1000
                    ? `${(value / 1000).toFixed(1)}k`
                    : value.toString();
                }}
              />
            </h3>
            <p className="text-gray-600">Usuários</p>
          </div>

          <div className="bg-white p-2 border border-transparent border-x-gray-400 border-solid sm:border-transparent">
            <h3 className="text-4xl font-bold mb-2">
              <CountUp
                start={0}
                end={1200}
                duration={2.5}
                separator=","
                formattingFn={(value: number) => {
                  return value >= 1000
                    ? `${(value / 1000).toFixed(1)}k`
                    : value.toString();
                }}
              />
            </h3>
            <p className="text-gray-600">Clientes Satisfeitos</p>
          </div>

          <div className="bg-white p-2">
            <h3 className="text-4xl font-bold mb-2">
              <CountUp
                start={0}
                end={800}
                duration={2.5}
                separator=","
                formattingFn={(value: number) => {
                  return value >= 1000
                    ? `${(value / 1000).toFixed(1)}k`
                    : value.toString();
                }}
              />
            </h3>
            <p className="text-gray-600">Vendas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

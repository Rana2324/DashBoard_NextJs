"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export interface Payment {
  id: string;
  amount: number;
  status: "pending" | "success" | "failed";
  username: string;
  email: string;
}

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed521",
      amount: 134,
      status: "pending",
      username: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: "728ed522",
      amount: 124,
      status: "success",
      username: "Jane Doe",
      email: "janedoe@gmail.com",
    },
    {
      id: "728ed523",
      amount: 167,
      status: "success",
      username: "Mike Galloway",
      email: "mikegalloway@gmail.com",
    },
    {
      id: "728ed524",
      amount: 156,
      status: "failed",
      username: "Minerva Robinson",
      email: "minerbarobinson@gmail.com",
    },
    {
      id: "728ed525",
      amount: 145,
      status: "success",
      username: "Mable Clayton",
      email: "mableclayton@gmail.com",
    },
    {
      id: "728ed526",
      amount: 189,
      status: "pending",
      username: "Nathan McDaniel",
      email: "nathanmcdaniel@gmail.com",
    },
    {
      id: "728ed527",
      amount: 178,
      status: "success",
      username: "Myrtie Lamb",
      email: "myrtielamb@gmail.com",
    },
    {
      id: "728ed528",
      amount: 190,
      status: "success",
      username: "Leona Bryant",
      email: "leonabryant@gmail.com",
    },
    {
      id: "728ed529",
      amount: 134,
      status: "failed",
      username: "Aaron Willis",
      email: "aaronwillis@gmail.com",
    },
    {
      id: "728ed52a",
      amount: 543,
      status: "success",
      username: "Joel Keller",
      email: "joelkeller@gmail.com",
    },
    {
      id: "728ed52b",
      amount: 234,
      status: "pending",
      username: "Daniel Ellis",
      email: "danielellis@gmail.com",
    },
    {
      id: "728ed52c",
      amount: 345,
      status: "success",
      username: "Gordon Kennedy",
      email: "gordonkennedy@gmail.com",
    },
    {
      id: "728ed52d",
      amount: 335,
      status: "failed",
      username: "Emily Hoffman",
      email: "emilyhoffman@gmail.com",
    },
    {
      id: "728ed52e",
      amount: 664,
      status: "pending",
      username: "Jeffery Garrett",
      email: "jefferygarrett@gmail.com",
    },
    {
      id: "728ed52f",
      amount: 332,
      status: "success",
      username: "Ralph Baker",
      email: "ralphbaker@gmail.com",
    },
    {
      id: "728ed52g",
      amount: 413,
      status: "failed",
      username: "Seth Fields",
      email: "sethfields@gmail.com",
    },
    {
      id: "728ed52h",
      amount: 345,
      status: "pending",
      username: "Julia Webb",
      email: "juliawebb@gmail.com",
    },
    {
      id: "728ed52i",
      amount: 754,
      status: "success",
      username: "Gary Banks",
      email: "garybanks@gmail.com",
    },
    {
      id: "728ed52j",
      amount: 643,
      status: "failed",
      username: "Flora Chambers",
      email: "florachambers@gmail.com",
    },
    {
      id: "728ed52k",
      amount: 543,
      status: "pending",
      username: "Steve Hanson",
      email: "stevehanson@gmail.com",
    },
    {
      id: "728ed52l",
      amount: 324,
      status: "success",
      username: "Lola Robinson",
      email: "lolarobinson@gmail.com",
    },
    {
      id: "728ed52m",
      amount: 123,
      status: "pending",
      username: "Ethel Waters",
      email: "ethelwaters@gmail.com",
    },
    {
      id: "728ed52n",
      amount: 422,
      status: "failed",
      username: "Grace Edwards",
      email: "graceedwards@gmail.com",
    },
    {
      id: "728ed52o",
      amount: 712,
      status: "success",
      username: "Sallie Wong",
      email: "salliewong@gmail.com",
    },
    {
      id: "728ed52p",
      amount: 360,
      status: "success",
      username: "Bryan Gutierrez",
      email: "bryangutierrez@gmail.com",
    },
    {
      id: "728ed52q",
      amount: 454,
      status: "pending",
      username: "Erik Rice",
      email: "erikrice@gmail.com",
    },
    {
      id: "728ed52r",
      amount: 382,
      status: "success",
      username: "Jordan Atkins",
      email: "jordanatkins@gmail.com",
    },
    {
      id: "728ed52s",
      amount: 328,
      status: "failed",
      username: "Bill Brewer",
      email: "billbrewer@gmail.com",
    },
    {
      id: "728ed52t",
      amount: 250,
      status: "success",
      username: "Edwin Morris",
      email: "edwinmorris@gmail.com",
    },
    {
      id: "728ed52u",
      amount: 658,
      status: "success",
      username: "Harold Becker",
      email: "haroldbecker@gmail.com",
    },
    {
      id: "728ed52v",
      amount: 691,
      status: "success",
      username: "Hannah Rodriguez",
      email: "hannahrodriguez@gmail.com",
    },
    {
      id: "728ed52w",
      amount: 969,
      status: "success",
      username: "Zachary Beck",
      email: "zacharybeck@gmail.com",
    },
    {
      id: "728ed52x",
      amount: 617,
      status: "failed",
      username: "Frances Potter",
      email: "francespotter@gmail.com",
    },
    {
      id: "728ed52y",
      amount: 173,
      status: "success",
      username: "Raymond Murray",
      email: "raymondmurray@gmail.com",
    },
    {
      id: "728ed52z",
      amount: 843,
      status: "success",
      username: "Adam Sherman",
      email: "adamsherman@gmail.com",
    },
    {
      id: "728ed521f",
      amount: 914,
      status: "pending",
      username: "Anne Cruz",
      email: "annecruz@gmail.com",
    },
  ];
};

export default function Page() {
  const [data, setData] = useState<Payment[]>([]);
  const [currency, setCurrency] = useState<"USD" | "JPY">("USD");
  const conversionRate = 150;

  useEffect(() => {
    getData().then(setData);
  }, []);

  const displayData = data.map((item) => ({
    ...item,
    amount:
      currency === "USD"
        ? item.amount
        : Math.round(item.amount * conversionRate),
  }));

  return (
    <div>
      <div className="mb-8 px-4 lg:px-8 xl:px-16 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
            Payment History
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base">
            View and manage all your recent payment transactions below.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
              currency === "USD"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setCurrency("USD")}
          >
            USD
          </button>
          <button
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
              currency === "JPY"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setCurrency("JPY")}
          >
            JPY
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            + New Payment
          </button>
        </div>
      </div>
      <DataTable data={displayData} columns={columns} currency={currency} />
    </div>
  );
}

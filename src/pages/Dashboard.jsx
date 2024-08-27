import React from "react";
import { Search, Sidebar } from "../components";
import BookFreee from "../components/BookFreee";
import Login from "../components/Login";
import GetSTarted from "../components/GetSTarted";
import Cards from "../components/Cards";
import SmallCard from "../components/SmallCard";
import SmallCards from "../components/SmallCards";
import BigCard from "../components/BigCard";
import Support from "../components/Support";

export default function Dashboard() {
  return (
    <>
      <main className="flex bg-gray-200 h-full">
        <Sidebar />
        <section className="flex flex-1 flex-col w-full pl-14 md:pl-6 pr-2">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Search />
              <div className="flex min-w-full gap-4">
              <BookFreee /> 
              <Login />
              </div>
          </div>
          <div className="mt-4">
            <GetSTarted />
          </div>
          <div className="flex flex-col md:flex-row  gap-6 mt-4">
            <Cards />
            <SmallCard />
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-6 mb-6">
            <BigCard />
            <SmallCards /> 
          </div>
          <div className="flex justify-end items-center -mt-10 mb-3 mr-2 ">
          <Support />
          </div>
        </section>
      </main>
    </>
  );
}

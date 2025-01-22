"use client";

import React from "react";

import { ResponsiveTimeRange } from "@nivo/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MyResponsiveTimeRange = ({ data /* see data tab */ }) => {
  return (
    <ResponsiveTimeRange
      data={data}
      from="2018-04-01"
      to="2018-08-12"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
    />
  );
};

const Calendar = () => {
  function generateDataArray(year, numberOfObjects, minValue, maxValue) {
    const dataArray = [];
    for (let i = 1; i <= numberOfObjects; i++) {
      const randomValue =
        Math.floor(Math.random() * (maxValue - minValue)) + minValue;
      const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
      const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
      const date = `${year}-${month}-${day}`;
      dataArray.push({ value: randomValue, day: date });
    }
    return dataArray;
  }

  const data = generateDataArray(2023, 20, 20, 100);
  console.log(data);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>These are the number of this year</CardDescription>
      </CardHeader>
      <CardContent className="h-[100px] flex items-center w-full">
        <MyResponsiveTimeRange data={data} />
      </CardContent>
    </Card>
  );
};

export default Calendar;

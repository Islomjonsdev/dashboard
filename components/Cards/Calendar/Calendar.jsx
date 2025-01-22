"use client";

import React from "react";

import { ResponsiveTimeRange } from "@nivo/calendar";
import { Card, CardContent } from "@/components/ui/card";

const MyResponsiveTimeRange = ({ data /* see data tab */ }) => {
  return (
    <ResponsiveTimeRange
      data={data}
      from="2018-04-01"
      to="2018-08-12"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          justify: false,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
          translateX: -60,
          translateY: -60,
          symbolSize: 20,
        },
      ]}
    />
  );
};

const Calendar = () => {
  function generateDataArray(year, numberOfObjects, minValue, maxValue) {
    const dataArray = [];
    for (let i = 1; i <= numberOfObjects; i++) {
      const randomValue =
        Math.floor(Math.random() * (maxValue - minValue)) + minValue;
      const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0"); // String() bilan aylantirish
      const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0"); // String() bilan aylantirish
      const date = `${year}-${month}-${day}`;
      dataArray.push({ value: randomValue, day: date });
    }
    return dataArray;
  }

  const data = generateDataArray(2023, 20, 20, 100);
  return (
    <Card>
      <CardContent className="h-[200px] flex items-center w-full">
        <MyResponsiveTimeRange data={data} />
      </CardContent>
    </Card>
  );
};

export default Calendar;

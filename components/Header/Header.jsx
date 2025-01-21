"use client";

import { Bell } from "lucide-react";
import React from "react";
import { CommandHeader } from "../CommandHeader/CommandHeader";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [notification, setNotification] = useState([
    {
      text: "This a notification",
      date: "02-01-2015",
      read: true,
    },
    {
      text: "This another notification",
      date: "02-01-2015",
      read: false,
    },
  ]);
  return (
    <header className="grid grid-cols-2 p-4 border-b">
      <CommandHeader />

      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="relative" variant="outline" size="icon">
              <div
                className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${
                  notification.find((readEl) => readEl.read === true)
                    ? "bg-green-500"
                    : "bg-neutral-200"
                }`}
              ></div>
              <Bell />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notification?.map((item, id) => (
              <DropdownMenuItem
                className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
                key={id}
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item?.read ? "bg-green-500" : "bg-neutral-200"
                  }`}
                ></div>
                <div>
                  <p>{item?.text}</p>
                  <p className="text-xs text-neutral-500">{item?.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;

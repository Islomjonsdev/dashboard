import React from "react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../ui/command";
import {
  User,
  Inbox,
  Fuel,
  Bell,
  Settings,
  Cookie,
  MessageSquare,
} from "lucide-react";
import UserItem from "../UserItem/UserItem";

const Sidebar = () => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <Fuel />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <Bell />,
          text: "Notification",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Logs",
        },
      ],
    },
  ];
  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList?.map((menu, index) => (
              <CommandGroup key={index} heading={menu.group}>
                {menu?.items?.map((option, index) => (
                  <CommandItem
                    className="cursor-pointer flex gap-2"
                    key={index}
                  >
                    {option?.icon}
                    {option?.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings</div>
    </div>
  );
};

export default Sidebar;

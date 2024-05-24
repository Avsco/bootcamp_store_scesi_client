import { Avatar, Input } from "@nextui-org/react";

export const HomeView = () => {
  return (
    <div>
      <Input type="email" label="Email" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" size="sm" />

      <h1 className="fill-white p-2 m-10">Home</h1>
    </div>
  );
};

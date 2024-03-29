"use client";
import CustomInput from "@/app/ui/reusableComponents/CustomInput";
import React, { useState } from "react";

const Security = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="mt-5">
      <p className="text-[18px]">Change your password</p>

      <p className="mt-2 text-[13px] text-[#8e8686]">
        You can only change your password twice within 24 hours!
      </p>

      <CustomInput
        name={"Current password"}
        required
        value={currentPassword}
        onchange={(e) => setCurrentPassword(e.target.value)}
        type={"password"}
        className={"h-[50px] p-[5px] border rounded"}
      />

      <CustomInput
        name={"New password"}
        required
        value={newPassword}
        onchange={(e) => setNewPassword(e.target.value)}
        type={"password"}
        className={"h-[50px] p-[5px] border rounded"}
      />
      <p className="mt-2 text-[13px] text-[#928989]">
        Minimum 8 characters. Must include numbers, letters and special
        characters.
      </p>
    </div>
  );
};

export default Security;

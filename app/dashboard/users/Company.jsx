"use client";
import { fetchCompanyById } from "@/app/services/adminServices";
import React, { useEffect, useState } from "react";
import { Spin } from "antd";

const Company = ({ companyId }) => {
  const [company, setCompany] = useState("");
  const [text, setText] = useState("Loading..");

  const fetchCompany = async (id) => {
    const data = await fetchCompanyById(id);
    setCompany(data?.company?.company_name);
  };

  useEffect(() => {
    fetchCompany(companyId);
  }, [companyId]);

  setTimeout(() => {
    setText("Not assigned");
  }, 1000);

  return <div>{company ? company.toLocaleUpperCase() : text}</div>;
};

export default Company;

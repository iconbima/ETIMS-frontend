"use client";

import React, { useEffect, useState } from "react";
import { Table } from "antd";
import CustomButton from "@/app/ui/reusableComponents/CustomButton";
import { fetchTransactions } from "@/app/services/adminServices";
import AddTransactions from "./AddTransactions";
import Link from "next/link";
const Transactions = () => {
  const [toggle, setToggle] = useState("requests");
  const [requests, setRequests] = useState([]);
  const [responses, setResponses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const getTransactions = async () => {
    setLoading(true);
    const { transactions, txResponse } = await fetchTransactions();
    setResponses(txResponse);
    setRequests(transactions);
    setLoading(false);
  };
  useEffect(() => {
    getTransactions();
  }, []);

  const Requests = [
    {
      title: "Transaction ID",
      dataIndex: "transactionID",
      key: "transactionID",
      render: (_, item) => (
        <Link href={`transactions/${item?._id}`}>{item.transactionID}</Link>
      ),
    },
    {
      title: "Trader No",
      dataIndex: "trdInvcNo",
      key: "trdInvcNo",
    },
    {
      title: "Invoice No",
      dataIndex: "invcNo",
      key: "invcNo",
    },
    {
      title: "Original Invoice No",
      dataIndex: "orgInvcNo",
      key: "orgInvcNo",
    },
    {
      title: "Reciept Type Code",
      dataIndex: "rcptTyCd",
      key: "rcptTyCd",
    },
  ];
  const url =
    " https://etims-sbx.kra.go.ke/common/link/etims/receipt/indexEtimsReceiptData?Data=P000597676Q00";
  const Responses = [
    {
      title: "Transaction ID",
      dataIndex: "transactionID",
      key: "transactionID",
    },
    {
      title: "Internal Data",
      dataIndex: "intrlData",
      key: "intrlData",
    },
    {
      title: "Reciept Signature",
      dataIndex: "rcptSign",
      key: "rcptSign",
    },
    {
      title: "Control Unit Date",
      dataIndex: "sdcDateTime",
      key: "company_code",
    },
    {
      title: "Reciepts",
      dataIndex: "resultMsg",
      key: "resultMsg",
      render: (_, item) => (
        <a
          target="_blank"
          className="h-[20px] bg-[#8c8cbe] border rounded-md p-[5px] text-white"
          href={`${url}${item?.rcptSign}`}
        >
          View Receipt
        </a>
      ),
    },
  ];
  const renderTable = () => {
    switch (toggle) {
      case "requests":
        return (
          <Table columns={Requests} dataSource={requests} loading={loading} />
        );
      case "responses":
        return (
          <Table columns={Responses} dataSource={responses} loading={loading} />
        );
    }
  };

  return (
    <div className="mt-5 ">
      <div className="flex justify-center">
        <CustomButton
          name={"Transactions Requests"}
          type={"button"}
          onClick={() => setToggle("requests")} // Set the toggle state to "requests" when the button is clicked
          className={`h-[40px] ${
            toggle === "requests" ? "bg-[#91bdb3]" : "bg-[#d6a727]"
          } p-2 justify-center items-center flex text-black font-bold border rounded-md w-[100%] `}
        />
        <CustomButton
          name={"Transactions Responses"}
          type={"button"}
          onClick={() => setToggle("responses")}
          className={`h-[40px] ${
            toggle === "responses" ? "bg-[#91bdb3]" : "bg-[#d6a727]"
          } p-2 justify-center items-center flex text-black font-bold border rounded-md w-[100%] `}
        />
      </div>
      {toggle === "requests" ? (
        <div className="flex justify-end">
          <CustomButton
            name={"Add Transaction"}
            type={"button"}
            onClick={() => setShowForm(true)}
            className={
              "h-[40px] bg-[#8383f5] p-5 flex items-center text-black rounded-md mt-3"
            }
          />
        </div>
      ) : (
        <></>
      )}
      <div className="mt-3">{renderTable()}</div>
      <AddTransactions
        isOpen={showForm}
        onSaved={() => getTransactions()}
        handleClose={() => setShowForm(false)}
      />
    </div>
  );
};

export default Transactions;

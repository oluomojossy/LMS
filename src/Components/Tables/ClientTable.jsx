import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { MdDelete } from "react-icons/md";
import Panel from "../Panel/Panel";
import Search from "../Input/Search";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";

export default function ClientTable() {
  const id = JSON.parse(localStorage.getItem("user"))?.UserID;
  const [client, setClient] = useState([]);
  const [search, setSearch] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [selectedClient, setSelectedClient] = useState({});

  useEffect(() => {
    getClientInformation();
  }, []);

  const getClientInformation = async () => {
    try {
      const res = await axios.get(
        `https://plaintiff-backend.onrender.com/api_v1/getClients/${id}`
      );
      setClient(res?.data?.data);
      if (res?.data && res?.data?.data && Array.isArray(res?.data?.data)) {
        const clientData = res?.data?.data.map((item) => {
          return { CaseID: item.CaseID, ClientID: item.ClientID };
        });
        localStorage.setItem("clients", JSON.stringify(clientData));
      } else {
        console.error("Invalid response structure");
      }
    } catch (err) {
      console.error("Error fetching client information:", err);
    }
  };

  const handleDelete = async (caseID, clientID) => {
    try {
      await axios.delete(
        `https://plaintiff-backend.onrender.com/api_v1/client/delete/${id}/${caseID}/${clientID}`
      );
      toast.success("Deleted Successfully");
      getClientInformation();
      setDeleted(false); // Close the modal after successful deletion
    } catch (err) {
      console.error("Error deleting client:", err);
      toast.error("Failed to delete client");
    }
  };

  const result = client.filter((item) => {
    const FirstName = item.FirstName.toString();
    const LastName = item.LastName.toLowerCase().includes(search.toLowerCase());
    const Matched = FirstName.includes(search.toLowerCase());
    return LastName || Matched;
  });

  const showDeleteModal = (caseID, clientID) => {
    setSelectedClient({ caseID, clientID });
    setDeleted(true);
  };

  return (
    <>
      <div className="mt-8">
        <Panel title="Client History">
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
          <Table
            removeWrapper
            isStriped
            aria-label="Wallets"
            classNames={{
              th: "px-5 py-4 text-left bg-blue-900 text-green-50",
              td: "px-5 py-5",
            }}
          >
            <TableHeader>
              <TableColumn>First Name </TableColumn>
              <TableColumn>Last Name </TableColumn>
              <TableColumn className="">Email </TableColumn>
              <TableColumn>Phone Number</TableColumn>
              <TableColumn> Address</TableColumn>
              <TableColumn>Gender</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No rows to display."}>
              {result?.map((row) => (
                <TableRow key={row.id} className="h-14 py-5">
                  <TableCell>{row.FirstName}</TableCell>
                  <TableCell>{row.LastName}</TableCell>
                  <TableCell>{row.Email}</TableCell>
                  <TableCell>{row.ContactNumber}</TableCell>
                  <TableCell>{row.Address}</TableCell>
                  <TableCell>{row.Gender}</TableCell>
                  <TableCell>
                    <MdDelete
                      className="text-xl cursor-pointer"
                      onClick={() => showDeleteModal(row.CaseID, row.ClientID)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Panel>
      </div>
      <Modal
        open={deleted}
        onOk={() =>
          handleDelete(selectedClient.caseID, selectedClient.clientID)
        }
        onCancel={() => setDeleted(false)}
        okButtonProps={{
          className: "bg-blue-900 text-white rounded w-10 text-sm px-2",
          size: "small",
        }}
        okText="Yes"
        cancelButtonProps={{ hidden: true }}
      >
        <h1>
          <p className="text-red-700">
            Are you sure you want to delete this client?
          </p>
        </h1>
      </Modal>
    </>
  );
}

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import Panel from "../Panel/Panel";
import axios from "axios";
import Search from "../Input/Search";
import { useState, useEffect } from "react";
import { CgOpenCollective } from "react-icons/cg";

export default function DataTable() {
  const id = JSON.parse(localStorage.getItem("user"))?.UserID;
  const [client, setClient] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const getDeleted = async () => {
    try {
      const res = await axios.get(
        `https://plaintiff-backend.onrender.com/api_v1/client/deleted-clients/${id}`
      );
      setClient(res?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDeleted();
  }, []);

  return (
    <div className="mt-8">
      <Panel title="History">
        <Search />
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
            <TableColumn>Email </TableColumn>
            <TableColumn>Phone Number</TableColumn>
            <TableColumn> Address</TableColumn>
            <TableColumn>Gender</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>

          <TableBody emptyContent={"No rows to display."}>
            {client?.map((row) => (
              <TableRow key={row.id} className="h-14 py-5">
                <TableCell>{row.FirstName}</TableCell>
                <TableCell>{row.LastName}</TableCell>
                <TableCell>{row.Email}</TableCell>
                <TableCell>{row.ContactNumber}</TableCell>
                <TableCell>{row.Address}</TableCell>
                <TableCell>{row.Gender}</TableCell>
                <TableCell>
                  <CgOpenCollective className="text-xl cursor-pointer" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Panel>
    </div>
  );
}

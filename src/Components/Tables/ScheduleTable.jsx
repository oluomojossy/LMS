import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import Panel from "../Panel/Panel";
import Search from "../Input/Search";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ScheduleTable() {
  const id = JSON.parse(localStorage.getItem("user"))?.UserID;
  const [client, setClient] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const getSchedule = async () => {
    try {
      const res = await axios.get(
        `https://plaintiff-backend.onrender.com/api_v1/schedules/all_schedules/${id}`
        
      );
      setClient(res?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSchedule();
  }, []);

  const result = client?.filter((item) => {
    const clientName = item?.clientName.toString();
    const clientEmail = item?.clientEmail
      .toLowerCase()
      .includes(search.toLowerCase());
    const Matched = clientName?.includes(search.toLowerCase());
    return clientEmail || Matched;
  });

  useEffect(() => {
    setFilter(result);
  }, [search, client]);


  return (
    <div className="mt-8">
      <Panel title="Schedule History">
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
            <TableColumn>Client Name </TableColumn>
            <TableColumn>Email </TableColumn>
            <TableColumn>Date for Appointment</TableColumn>
            <TableColumn> Time of Appointement</TableColumn>
            <TableColumn>Schedule Detail</TableColumn>
          </TableHeader>

          <TableBody emptyContent={"No rows to display."}>
            {result?.map((row) => (
              <TableRow key={row?.id} className="h-14 py-5">
                <TableCell>{row?.clientName}</TableCell>
                <TableCell>{row?.clientEmail}</TableCell>
                <TableCell>{row?.dateOfAppointment}</TableCell>
                <TableCell>{row?.timeOfAppointment}</TableCell>
                <TableCell>{row?.scheduleDetails}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Panel>
    </div>
  );
}

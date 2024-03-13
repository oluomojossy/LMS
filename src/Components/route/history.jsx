import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import DataTable from "../Tables/DataTable";

export default function History() {
  return (
    <>
      <DashboardLayout>
        <PageHeader title="History" />
        <div className="mt-4">
          <DataTable />
        </div>
      </DashboardLayout>
    </>
  );
}

import React from "react";
// import { headers } from "./tableData/tableData";
import { data } from "./tableData/tableData";
import { useTable } from 'react-table';

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

const Table = () => {
  return (
    <div className="bg-[#E8F4FF] small:rounded-2xl h-[85vh] small:h-full small:w-full">
      <div className="p-10 h-full">
        <DataTable value={data} showGridlines tableStyle={{ minWidth: "100%",direction:"rtl",height:"100%" }}>
          <Column field="id" header="ردیف" sortable></Column>
          <Column
            field="fullName"
            header="نام و نام خانوادگی"
            sortable
          ></Column>
          <Column field="employeeId" header="شماره پرسنلی" sortable></Column>
          <Column
            field="dateOfEmployment"
            header="تاریخ استخدام"
            sortable
          ></Column>
          <Column
            field="workExperience"
            header="سابقه خدمت"
            sortable
            style={{ width: "25%" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Table;

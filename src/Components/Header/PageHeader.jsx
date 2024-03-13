import React from "react";

export default function PageHeader({ title, description, ...props }) {
  return (
    <div {...props}>
      <h1 className="pageTitle text-xl font-bold mb-5 text-blue-900">{title}</h1>
      {description ? description : ""}    
    </div>
  );
}

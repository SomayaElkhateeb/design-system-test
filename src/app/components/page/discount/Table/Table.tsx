import React, { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return <table className="w-full border-collapse px-2">{children}</table>;
};

export default Table;

import React from "react";

interface HeaderItem {
  name: string;
  type: string;
  date: string;
  active: string;
  sales: string;
  actions: string;
}

interface Props {
  headerData: HeaderItem[];
}

const Header: React.FC<Props> = ({ headerData }) => {
  const header = headerData.map((item, index) => {
    return (
      <tr key={index}>
        <th className="w-1/7 pl-[18px] font-normal text-left">{item.name}</th>
        <th className="w-1/7 font-normal">{item.type}</th>
        <th className="w-1/7 font-normal">{item.date}</th>
        <th className="w-1/7 font-normal">{item.active}</th>
        <th className="w-1/7 font-normal">{item.sales}</th>
        <th className="w-1/7 font-normal">{item.actions}</th>
      </tr>
    );
  });

  return <>{header}</>;
};

export default Header;

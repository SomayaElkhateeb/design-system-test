import React, { ReactNode } from 'react';
/*

  <Table>
      <HeaderTable>
        <Header headerData={headerData} />
      </HeaderTable>
      <BodyTable>
        <Body bodyData={bodyData} />
      </BodyTable>
    </Table>

*/
interface TableProps {
	children: ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
	return <table className='w-full border-collapse'>{children}</table>;
};

export default Table;

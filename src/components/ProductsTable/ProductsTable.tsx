// Import components
import TableTemplate from 'components/TableTemplate/TableTemplate';

// Import variables
import { TABLE_API, TABLE_TYPE } from 'variables/table';
import { TABLE_COLUMNS } from './variables';

const ProductsTable = () => (
	<TableTemplate
		apiUrl={TABLE_API.PRODUCTS}
		tableName={TABLE_TYPE.PRODUCTS}
		columns={TABLE_COLUMNS}
	/>
);

export default ProductsTable;

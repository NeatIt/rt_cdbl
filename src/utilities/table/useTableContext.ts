import { useContext } from 'react';

// Import context
import { TableContext } from './TableProvider';

export const useTableContext = () => {
	const tableContext = useContext(TableContext);

	if (!tableContext) {
		throw new Error(
			'useTableContext has to be used within <TableContext.Provider>'
		);
	}

	return tableContext;
};

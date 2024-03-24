import {
	createContext,
	useEffect,
	useState,
	useCallback,
	type MouseEvent,
	type ChangeEvent
} from 'react';
import _debounce from 'lodash/debounce';

// Import utilities
import { useQueryString } from './helpers/useQueryString';
import axios from 'services';

// Import types
import { FCWithChildren, CustomAxiosError } from 'types/common';
import { TableResponseData, TableItemData } from 'types/table';

export const DEFAULT_TABLE_DATA = {
	page: 1,
	per_page: 5,
	total: 12,
	total_pages: 3,
	data: [],
	support: {}
};

type Props = {
	apiUrl: string;
};

type ContextProps = {
	page: number;
	rowsPerPage: number;
	total: number;
	totalPages: number;
	data: TableItemData[] | [];
	error: CustomAxiosError;
	filterId: string;
	onPageChange: (e: MouseEvent<HTMLButtonElement> | null, page: number) => void;
	onIdChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TableContext = createContext<ContextProps | null>(null);

const TableProvider: FCWithChildren<Props> = ({ children, apiUrl }) => {
	const [tableData, setTableData] = useState<TableResponseData | null>(null);
	const [error, setError] = useState<CustomAxiosError>(null);
	const [filterId, setFilterId] = useState('');
	const { searchParams, setSearchParams } = useQueryString();

	const { page, id } = searchParams;

	const handlePageChange = (
		_e: MouseEvent<HTMLButtonElement> | null,
		page: number
	) => {
		setSearchParams({ page: `${page + 1}` });
	};

	const handleDebounceFn = (id: string) => {
		setSearchParams({ page: '1', id: id ?? '' });
	};

	const debounceFn = useCallback(_debounce(handleDebounceFn, 500), []);

	const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
		const id = e.target.value;
		setFilterId(id);
		debounceFn(id);
	};

	const getCurrentTableData = () => {
		if (tableData?.data) {
			return Array.isArray(tableData.data) ? tableData.data : [tableData.data];
		} else {
			return [];
		}
	};

	const currentTablePage = tableData?.page ? tableData.page - 1 : 0;
	const currentTableData = getCurrentTableData();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios(apiUrl, {
					params: searchParams
				});

				setTableData(data);
				setError(null);
			} catch (error) {
				setTableData(DEFAULT_TABLE_DATA);
				setError(error as CustomAxiosError);
			}
		};

		fetchData();
	}, [page, id]);

	useEffect(() => setSearchParams(searchParams), []);

	return (
		<TableContext.Provider
			value={{
				page: currentTablePage,
				rowsPerPage: DEFAULT_TABLE_DATA.per_page,
				total: tableData?.total || DEFAULT_TABLE_DATA.total,
				totalPages: tableData?.total_pages || DEFAULT_TABLE_DATA.total_pages,
				data: currentTableData,
				error,
				filterId,
				onPageChange: handlePageChange,
				onIdChange: handleIdChange
			}}
		>
			{children}
		</TableContext.Provider>
	);
};

export default TableProvider;

import { useSearchParams } from 'react-router-dom';

export const useQueryString = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const page = searchParams.get('page');
	const id = searchParams.get('id');

	return { searchParams: { page: page || '1', id: id || '' }, setSearchParams };
};

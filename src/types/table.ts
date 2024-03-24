export type TableItemData = {
	id: number;
	name: string;
	year: number;
	color: string;
	pantone_value: string;
};

export type TableResponseData = {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: TableItemData[];
	support: Record<string, string>;
};

import { FC, PropsWithChildren } from 'react';

export type FCWithChildren<T = unknown> = FC<PropsWithChildren<T>>;

export type CustomAxiosError = {
	message: string;
	errorCode: string;
} | null;

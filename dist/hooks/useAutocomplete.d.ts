import { HttpError, UseSelectProps, UseSelectReturnType, BaseRecord } from '@refinedev/core';
import { AutocompleteProps } from '@mui/material/Autocomplete';
export type UseAutocompleteProps<TQueryFnData, TError, TData> = Pick<UseSelectProps<TQueryFnData, TError, TData>, "resource"> & Omit<UseSelectProps<TQueryFnData, TError, TData>, "optionLabel" | "optionValue">;
type AutocompletePropsType<TQueryFnData> = Required<Pick<AutocompleteProps<TQueryFnData, boolean, boolean, boolean>, "options" | "loading" | "onInputChange" | "filterOptions">>;
export type UseAutocompleteReturnType<TData extends BaseRecord> = Omit<UseSelectReturnType<TData>, "options"> & {
    autocompleteProps: AutocompletePropsType<TData>;
};
/**
 * `useAutocomplete` hook is used to fetch data from the dataProvider and return the options for the select box.
 *
 * It uses `getList` method as query function from the dataProvider that is
 * passed to {@link https://refine.dev/docs/api-reference/core/components/refine-config `<Refine>`}.
 *
 * @see {@link https://refine.dev/docs/api-reference/mui/hooks/useAutocomplete/} for more details.
 *
 * @typeParam TQueryFnData - Result data returned by the query function. Extends {@link https://refine.dev/docs/api-reference/core/interfaceReferences#baserecord `BaseRecord`}
 * @typeParam TError - Custom error object that extends {@link https://refine.dev/docs/api-reference/core/interfaceReferences#httperror `HttpError`}
 * @typeParam TData - Result data returned by the `select` function. Extends {@link https://refine.dev/docs/api-reference/core/interfaceReferences#baserecord `BaseRecord`}. Defaults to `TQueryFnData`
 *
 */
export declare const useAutocomplete: <TQueryFnData extends BaseRecord = any, TError extends HttpError = HttpError, TData extends BaseRecord = TQueryFnData>(props: UseAutocompleteProps<TQueryFnData, TError, TData>) => UseAutocompleteReturnType<TData>;
export {};

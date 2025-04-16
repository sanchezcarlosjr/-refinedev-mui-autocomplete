# @refinedev/mui-autocomplete

This package provides the `useAutocomplete` hook, designed to integrate Refine's data fetching capabilities with Material UI's `Autocomplete` component. It simplifies fetching and managing options for autocomplete inputs within a Refine application.


## Installation

Ensure the necessary peer dependencies are installed in your project:

```bash
pnpm install github:sanchezcarlosjr/useAutocomplete
```

## Usage

The `useAutocomplete` hook fetches data using Refine's `dataProvider` based on the provided `resource` and returns props compatible with MUI's `Autocomplete` component.

```tsx
import React from 'react';
import { useAutocomplete } from '@refinedev/mui-autocomplete'; // Adjust import path as needed
import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import { useList } from '@refinedev/core'; // Or your specific data fetching hook

interface ICategory {
    id: number;
    title: string;
}

const CategoryAutocomplete: React.FC = () => {
    const { autocompleteProps, queryResult } = useAutocomplete<ICategory>({
        resource: 'categories',
        // Optional: Debounce search input
        // debounce: 300,
        // Optional: Add filters, sorters, etc.
        // filters: [...],
        // sorters: [...]
    });

    return (
        <Autocomplete
            {...autocompleteProps}
            getOptionLabel={(option) => option.title || ''}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Categories"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {autocompleteProps.loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
};

export default CategoryAutocomplete;

```

## Hook Details

### Parameters (`UseAutocompleteProps`)

The `useAutocomplete` hook accepts props similar to `@refinedev/core`'s `useSelect`, excluding `optionLabel` and `optionValue` as MUI's `Autocomplete` handles labelling separately via `getOptionLabel`.

*   `resource` (string, required): The name of the Refine resource to fetch data from.
*   `debounce` (number, optional): Debounce time in milliseconds for the search input.
*   `filters` (CrudFilters, optional): Filters to apply to the data fetching query.
*   `sorters` (CrudSorters, optional): Sorters to apply to the data fetching query.
*   `fetchSize` (number, optional): Number of items to fetch per request.
*   `queryOptions` (UseQueryOptions, optional): React Query options for the main data fetching query.
*   `defaultValueQueryOptions` (UseQueryOptions, optional): React Query options for fetching default value records.
*   `defaultValue` (string | string[], optional): Initial selected value(s).
*   `onSearch` ((value: string) => void, optional): Callback function triggered on input change (after debounce, if configured). Useful for custom search logic if needed, though the hook handles basic filtering via `dataProvider`.
*   `queryMeta` (MetaDataQuery, optional): Metadata to pass to the `dataProvider`'s `getList` method.
*   `selectedOptionsOrder`: (`"selected-first"` | `"normal"`, optional): Defines the order of options when default values are present. Defaults to `"normal"`.

### Return Value (`UseAutocompleteReturnType`)

The hook returns an object containing:

*   `autocompleteProps`: An object containing props to be spread onto the MUI `Autocomplete` component:
    *   `options` (TData[]): The fetched data suitable for Autocomplete options.
    *   `loading` (boolean): Indicates if the data is currently being fetched.
    *   `onInputChange` ((event: React.SyntheticEvent, value: string) => void): Handles input changes and triggers searches. **Connect this to MUI `Autocomplete`'s `onInputChange` prop.**
    *   `filterOptions` ((options: TData[]) => TData[]): A basic pass-through filter, as filtering is primarily handled server-side via `onSearch`. **Connect this to MUI `Autocomplete`'s `filterOptions` prop.**
*   `queryResult` (UseQueryResult): The React Query result object for the main data fetching query.
*   `defaultValueQueryResult` (UseQueryResult): The React Query result object for fetching the default value data.
*   `onSearch`: The function used internally to trigger searches (exposed for potential advanced use cases).
*   `query`: Deprecated alias for `queryResult`.
*   `defaultValueQuery`: Deprecated alias for `defaultValueQueryResult`.
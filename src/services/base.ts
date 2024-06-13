import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Entry, EntryType } from 'models/entry';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Entries'],
    endpoints: (builder) => ({
        getBudgetEntries: builder.query<Entry[], void>({
            query: () => 'budget-entries',
            providesTags: ['Entries'],
        }),
        createBudgetEntry: builder.mutation<
            void,
            Omit<Entry, 'id' | 'entryType'>
        >({
            query: ({
                name,
                amount,
                category,
                frequency,
                dueDate,
                paymentMethod,
            }) => ({
                url: 'budget-entries',
                method: 'POST',
                body: {
                    name,
                    amount,
                    category,
                    entryType: EntryType.Budget,
                    frequency,
                    dueDate,
                    paymentMethod,
                },
            }),
            invalidatesTags: ['Entries'],
        }),
    }),
});

export const { useGetBudgetEntriesQuery, useCreateBudgetEntryMutation } =
    baseApi;

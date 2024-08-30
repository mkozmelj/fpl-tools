export type PaginationData<T> = {
  data: T[];
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};

import { useEffect, useState } from "react";

export const usePagination = <CollectionType>(collection: CollectionType[]) => {
  const pageSize = 10;
  const [pageIndex, setPageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState<CollectionType[]>(
    getPageItems(pageIndex, collection),
  );

  function getPageItems(index: number, totalCollection: CollectionType[]) {
    return totalCollection.slice(index * pageSize, (index + 1) * pageSize);
  }

  useEffect(() => {
    setCurrentPage(getPageItems(pageIndex, collection));
  }, [collection, pageIndex]);

  function previousPage() {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  }

  function nextPage() {
    if ((pageIndex + 1) * pageSize < collection.length) {
      setPageIndex(pageIndex + 1);
    }
  }

  return { currentPage, previousPage, nextPage };
};

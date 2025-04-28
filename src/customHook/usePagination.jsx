import { useEffect, useState } from "react";

const usePagination = (url, itemsPerPage = 5) => {
    const [paginationData, setPaginationData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    console.log(currentPage);


    const fetchPaginationData = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setPaginationData(result);
    }

    useEffect(() => {
        fetchPaginationData();
    }, [url])

    const totalPage = Math.ceil(paginationData.length / itemsPerPage);
    console.log(totalPage);


    useEffect(() => {
        const nextPage = setInterval(() => {
            // setCurrentPage((prevPage) => prevPage + 1);
            setCurrentPage((prevPage) => {
                if (prevPage < totalPage) {
                    return prevPage + 1
                }

                return 1;
            }
            );
        }, 3000)

        return () => clearInterval(nextPage);
    }, [totalPage])

    const currentPageData = paginationData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    return { currentPage, currentPageData, totalPage }
}

export default usePagination;
import { useEffect, useState } from "react";

function PaginationComponents({ meta, moveTo }) {
  const [pagesArray, setPagesArray] = useState([]);
  useEffect(() => {
    var arr = [];
    for (let index = 1; index <= meta?.totalPages; index++) {
      arr.push(index);
    }
    setPagesArray([...arr]);
  }, [meta]);
  return (
    <div className="flex flex-row justify-center mt-5">
      <ul className="flex flex-row justify-content-end mt-3 mb-3 pe-3">
        {meta?.currentPage <= 1 || meta?.totalPages <= 6? (
          ""
        ) : (
          <li
            className={`page-button cursor-pointer me-2 ${
              meta?.currentPage <= 1 && " disabled me-2"
            }`}
          >
            <img src={"/images/arrow-left.svg"} width="18px" height="18px" alt="arrow" />
            <button
              className={`page-link ms-2 ${
                meta?.currentPage <= 1 && " cursor-default"
              }`}
              aria-disabled={meta?.currentPage <= 1}
              href="!#"
              onClick={(e) => {
                e.preventDefault();
                moveTo(meta?.currentPage - 1);
              }}
            >
              Previous
            </button>
          </li>
        )}
        {pagesArray.map((d, index) => {
          if (meta?.totalPages < 10) {
            return (
              <li
                key={"middle" + index}
                className={`page-item me-2 ${
                  meta?.currentPage === index + 1 && "active"
                }`}
              >
                {meta?.total === 0 ? (
                  ""
                ) : (
                  <button
                    className="page-link"
                    disabled={meta?.currentPage === index + 1}
                    onClick={(e) => {
                      e.preventDefault();
                      moveTo(index + 1);
                    }}
                  >
                    {index + 1}
                  </button>
                )}
              </li>
            );
          } else if (index === 0) {
            return (
              <li
                key={"middle" + index}
                className={`page-item me-2 ${
                  meta?.currentPage === index + 1 && "active"
                }`}
              >
                <button
                  className="page-link"
                  disabled={meta?.currentPage === index + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    moveTo(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              </li>
            );
          } else if (meta?.currentPage < 5 && index < 5) {
            return (
              <li
                key={"middle" + index}
                className={`page-item me-2 ${
                  meta?.currentPage === index + 1 && "active"
                }`}
              >
                <button
                  className="page-link"
                  disabled={meta?.currentPage === index + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    moveTo(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              </li>
            );
          } else if (meta?.currentPage > 3 && index < 2) {
            return (
              <button
                key={"middle" + index}
                className={`page-link page-item me-2 p-0 pt-3 border-0`}
                disabled={true}
              >
                ...
              </button>
            );
          } else if (
            (index < meta?.currentPage && meta?.currentPage - 4 < index) ||
            (index < meta?.currentPage + 2 && meta?.currentPage - 4 < index)
          ) {
            return (
              <li
                key={"first" + index}
                className={`page-item me-2 ${
                  meta?.currentPage === index + 1 && "active"
                }`}
              >
                <button
                  className="page-link"
                  disabled={meta.currentPage === index + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    moveTo(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              </li>
            );
          } else if (
            index + 1 > meta?.totalPages - 2 &&
            index + 1 !== meta?.totalPages
          ) {
            return (
              <button
                key={"middle" + index}
                className={`page-link page-item me-2 p-0 pt-3 border-0`}
                disabled={true}
              >
                ...
              </button>
            );
          } else if (meta?.totalPages > 8 && meta?.totalPages === index + 1) {
            return (
              <li
                key={"last" + index}
                className={`page-item me-2 ${
                  meta?.currentPage === index + 1 && "active"
                }`}
              >
                <button
                  className="page-link"
                  disabled={meta.currentPage === index + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    moveTo(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              </li>
            );
          }
        })}
        {meta?.currentPage >= meta?.totalPages ? (
          ""
        ) : (
          <li
            className={`page-button cursor-pointer ${
              meta?.currentPage >= meta?.totalPages &&
              " disabled ms-2"
            }`}
          >
             
            <a
              className={`page-link me-2 ${
                meta?.currentPage >= meta?.totalPages && "cursor-default"
              }`}
              aria-disabled={meta?.currentPage >= meta?.totalPages}
              onClick={(e) => {
                e.preventDefault();
                moveTo(meta?.currentPage + 1);
              }}
              href="!#"
            >
              Next
            </a>
            <img src={"/images/arrow-right.svg"} className="pt-1" width="18px" height="18px" alt="arrow" />
          </li>
        )}
      </ul>
    </div>
  );
}
export default PaginationComponents;

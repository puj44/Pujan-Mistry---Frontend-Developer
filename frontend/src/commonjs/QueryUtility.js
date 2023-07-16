const queries = ["search", "page"];
function QueryUtilityFunc(searchQuery, selectedColumn,  page) {
 let apiQuery = "";
    queries.filter((d, i) => {
        apiQuery = apiQuery !== "" && apiQuery.charAt(apiQuery.length - 1) !== "&" ? apiQuery.concat("&") : apiQuery.concat("");
        if (d === "search" && searchQuery) {
            apiQuery = apiQuery.concat("search=" + searchQuery + "," + selectedColumn?.field);
        }
        else if (d === "page" && page) {
            apiQuery = apiQuery.concat("page=" + page)
        }
    })
    return apiQuery;
}
export default QueryUtilityFunc;
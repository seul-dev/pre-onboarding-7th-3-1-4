import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getSearchResultsService } from "../api";
import { searchKeyword } from "../states/searchKeyword";
import { searchResults } from "../states/searchResults";

const useGetSearshList = () => {
  const inputValue = useRecoilValue(searchKeyword);
  const [searchResultsList, setSearchResultsList] =
    useRecoilState(searchResults);
  const getSearchResults = async (keyword: string) => {
    const data = await getSearchResultsService.search(keyword);
    console.info("calling api");
    setSearchResultsList(data);
  };
  useEffect(() => {
    inputValue && getSearchResults(inputValue);
  }, [inputValue]);

  return { inputValue, searchResultsList };
};

export default useGetSearshList;

import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getSearchResultsService } from "../api";
import { searchKeyword } from "../states/searchKeyword";
import { searchResults } from "../states/searchResults";
import { inputValidation } from "../util/inputValidation";

const useGetSearshList = () => {
  const inputValue = useRecoilValue(searchKeyword);
  const [searchResultsList, setSearchResultsList] =
    useRecoilState(searchResults);
  //   const [cache, setCache] = useState({});

  const getSearchResults = async (keyword: string) => {
    const data = await getSearchResultsService.search(keyword);
    setSearchResultsList(data);
  };
  useEffect(() => {
    if (inputValidation(inputValue)) {
      getSearchResults(inputValue);
    }
  }, [inputValue]);

  return { inputValue, searchResultsList };
};

export default useGetSearshList;

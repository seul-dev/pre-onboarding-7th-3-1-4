import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getSearchResultsService } from "../api";
import { searchKeyword } from "../states/searchKeyword";
import { searchResults } from "../states/searchResults";
import { inputValidation } from "../util/inputValidation";
import { ICache } from "../../types/types";

const useGetSearshList = () => {
  const inputValue = useRecoilValue(searchKeyword);
  const [searchResultsList, setSearchResultsList] =
    useRecoilState(searchResults);
  const [cache, setCache] = useState<ICache>({});

  const getSearchResults = async (keyword: string) => {
    if (!cache[keyword]) {
      const data = await getSearchResultsService.search(keyword);
      setSearchResultsList(data);
      setCache((prev) => ({ ...prev, [keyword]: data }));
    }
    if (cache[keyword]) {
      setSearchResultsList(cache[keyword]);
    }
  };
  useEffect(() => {
    if (inputValidation(inputValue)) {
      getSearchResults(inputValue);
    }
  }, [inputValue]);

  return { inputValue, searchResultsList };
};

export default useGetSearshList;

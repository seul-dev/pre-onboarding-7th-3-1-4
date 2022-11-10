# 한국 임상 정보 사이트의 검색창(검색어 추천 기능) 구현

## 1. api 호출 최적화

### 1) 검색어에 대한 validation 로직 추가

- 과제에 제시된 api 데이터가 한글로만 되어있어서 생각해본 방식
- 공백, 영어, 숫자, 한글 자음만 입력된 경우에는 api 호출을 하지 않는다.

```typescript
export const inputValidation = (text: string): boolean => {
  const regex = /^[가-힣]+$/;
  if (regex.test(text)) {
    return true;
  }
  return false;
};
```

### 2) {검색 키워드 : 검색 결과 데이터(배열) } 형태로 캐싱

- 캐시된 데이터가 없을 경우에만 요청을 api 요청을 보낸다.

```typescript
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
```

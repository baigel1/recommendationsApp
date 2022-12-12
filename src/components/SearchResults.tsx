import { SearchBar, UniversalResults } from "@yext/search-ui-react";

const SearchResults = () => {
  return (
    <div className="bg-orange-200 h-96 w-full overflow-y-scroll flex flex-col items-center">
      <SearchBar
        placeholder="search for anything you'd like"
        customCssClasses={{
          searchBarContainer: "mt-6 w-5/12",
        }}
      />
      <UniversalResults
        verticalConfigMap={{}}
        customCssClasses={{
          universalResultsContainer: "",
        }}
      />
    </div>
  );
};

export default SearchResults;

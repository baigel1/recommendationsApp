import {
  provideHeadless,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";
import { searchConfig } from "./searchConfig";

import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import RecsWidget from "./components/RecsWidget";

function App() {
  const searcher = provideHeadless(searchConfig);
  return (
    <>
      <SearchHeadlessProvider searcher={searcher}>
        <Header />
        <SearchResults />
        <RecsWidget />
      </SearchHeadlessProvider>
    </>
  );
}

export default App;

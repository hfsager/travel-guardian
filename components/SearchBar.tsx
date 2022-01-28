// export type SearchbarProps={
//     location: string,
//     zipcode?: number
// }
import styled from '@emotion/styled';

const Search = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SearchBar = () => {
  return (
    <form action="/" method="get">
      <Search>
        <input
          type="text"
          id="header-search"
          placeholder="Search Locations"
          name="search"
        />
        <button type="submit">Search</button>
      </Search>
    </form>
  );
};

export default SearchBar;

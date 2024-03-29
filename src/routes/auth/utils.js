import queryString from "query-string";

export function getQueryInAddressBar(location) {
  const queryObject = queryString.parse(location.search);
  const queryObjectLowerCased = {};
  Object.keys(queryObject).forEach(key => {
    queryObjectLowerCased[key.toLowerCase()] = queryObject[key];
  });
  return queryObjectLowerCased;
}

const content = `--- file: fixture_missing_include.lua
--- @include "includes/non-existent"
`;

export const fixture_missing_include = {
  path: 'fixture_missing_include',
  name: 'fixture_missing_include',
  content,
};

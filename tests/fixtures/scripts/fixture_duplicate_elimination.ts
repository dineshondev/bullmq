const content = `---
--- Fixture for script deduplication
--- We include multiple scripts which directly or
--- transitively include "strings.lua". It should only be included once
---
--- @include "includes/fixture_recursive_grandchild"
--- @include "includes/utils"
--- @include "includes/strings"
`;

export const fixture_duplicate_elimination = {
  path: 'fixture_duplicate_elimination',
  name: 'fixture_duplicate_elimination',
  content,
};

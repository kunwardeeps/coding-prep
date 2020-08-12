import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export function MenuItems({ tag, handleChange }) {
  const items = [
    { value: 'all', label: 'All' },
    { value: 'arrays', label: 'Arrays' },
    { value: 'backtracking', label: 'Backtracking' },
    { value: 'bfs', label: 'BFS' },
    { value: 'binary_search', label: 'Binary Search' },
    { value: 'bit_manipulation', label: 'Bit Manipulation' },
    { value: 'dfs', label: 'DFS' },
    { value: 'dp', label: 'Dynamic Programming' },
    { value: 'graph', label: 'Graph' },
    { value: 'greedy', label: 'Greedy' },
    { value: 'heap', label: 'Heap' },
    { value: 'intervals', label: 'Intervals' },
    { value: 'linked_list', label: 'Linked List' },
    { value: 'sliding_window', label: 'Sliding Window' },
    { value: 'sort', label: 'Sort' },
    { value: 'string', label: 'String' },
    { value: 'stack', label: 'Stack' },
    { value: 'topological_sort', label: 'Topological Sort' },
    { value: 'tree', label: 'Tree' },
    { value: 'trie', label: 'Trie' },
    { value: 'two_pointers', label: 'Two Pointers' },
    { value: 'union_find', label: 'Union Find' },
  ].map((item, i) => (
    <MenuItem value={item.value} key={i}>
      {item.label}
    </MenuItem>
  ));

  return (
    <div align="center">
      <Select
        labelId="select-tag-label"
        id="select-tag"
        value={tag}
        autoWidth={true}
        onChange={handleChange}
      >
        {items}
      </Select>
    </div>
  );
}

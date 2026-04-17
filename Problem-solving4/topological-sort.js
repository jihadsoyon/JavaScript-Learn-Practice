// Dependency Resolver (Topological Sort with Cycle Detection)

function resolveDependencies(deps) {
  const visited = new Set();     // fully processed nodes
  const visiting = new Set();    // nodes in current DFS path
  const result = [];

  function dfs(node) {
    // 🔥 Detect circular dependency
    if (visiting.has(node)) {
      throw new Error(`❌ Circular dependency detected at: ${node}`);
    }

    // already processed
    if (visited.has(node)) return;

    visiting.add(node);

    // process dependencies first
    for (const dep of deps[node] || []) {
      dfs(dep);
    }

    visiting.delete(node);
    visited.add(node);
    result.push(node); // add after dependencies
  }

  // run DFS for all nodes
  for (const node in deps) {
    dfs(node);
  }

  return result;
}


// ================= TEST 1 (Normal Case) =================
const deps1 = {
  A: ['B', 'C'],
  B: ['D'],
  C: [],
  D: []
};

console.log("✅ Valid Order:", resolveDependencies(deps1));
// Expected: ['D', 'B', 'C', 'A']


// ================= TEST 2 (Circular Case) =================
const deps2 = {
  A: ['B'],
  B: ['C'],
  C: ['A'] // 🔥 cycle here
};

try {
  console.log(resolveDependencies(deps2));
} catch (err) {
  console.error(err.message);
}
function diff(oldNode, newNode, path = "root") {
  const changes = [];

  // Case 1: Node removed
  if (newNode === undefined) {
    changes.push({
      type: "REMOVE",
      path,
    });
    return changes;
  }

  // Case 2: Node added
  if (oldNode === undefined) {
    changes.push({
      type: "ADD",
      path,
      value: newNode,
    });
    return changes;
  }

  // Case 3: Different type or value
  if (
    typeof oldNode !== typeof newNode ||
    (typeof oldNode !== "object" && oldNode !== newNode)
  ) {
    changes.push({
      type: "REPLACE",
      path,
      value: newNode,
    });
    return changes;
  }

  // Case 4: Both are objects → deep compare
  if (typeof oldNode === "object" && oldNode !== null && newNode !== null) {
    const allKeys = new Set([
      ...Object.keys(oldNode),
      ...Object.keys(newNode),
    ]);

    allKeys.forEach((key) => {
      const newPath = `${path}.${key}`;
      changes.push(...diff(oldNode[key], newNode[key], newPath));
    });

    return changes;
  }

  return changes;
}

// ----------------------
// ✅ TEST CASE
// ----------------------

const oldTree = {
  type: "div",
  props: {
    className: "container",
    children: [
      { type: "h1", props: { text: "Hello" } },
      { type: "p", props: { text: "Old text" } },
    ],
  },
};

const newTree = {
  type: "div",
  props: {
    className: "container-new", // UPDATED
    children: [
      { type: "h1", props: { text: "Hello World" } }, // UPDATED
      { type: "p", props: { text: "Old text" } },
      { type: "span", props: { text: "New node" } }, // ADDED
    ],
  },
};

const result = diff(oldTree, newTree);

console.log("Changes:", result);
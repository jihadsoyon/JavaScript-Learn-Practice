function myStringify(value) {
  const seen = new WeakSet();

  function stringify(val) {
    if (val === null) return "null";

    if (typeof val === "number" || typeof val === "boolean") {
      return String(val);
    }

    if (typeof val === "string") {
      return `"${val}"`;
    }

    if (typeof val === "undefined" || typeof val === "function") {
      return undefined;
    }

    if (typeof val === "object") {
      if (seen.has(val)) {
        throw new TypeError("Converting circular structure to JSON");
      }
      seen.add(val);
    }

    if (Array.isArray(val)) {
      const result = val.map(item => {
        const res = stringify(item);
        return res === undefined ? "null" : res;
      });
      return `[${result.join(",")}]`;
    }

    if (typeof val === "object") {
      const entries = Object.entries(val);
      const result = [];

      for (let [key, value] of entries) {
        const res = stringify(value);
        if (res !== undefined) {
          result.push(`"${key}":${res}`);
        }
      }

      return `{${result.join(",")}}`;
    }
  }

  return stringify(value);
}

// ✅ TEST
const obj = {
  name: "Jihad",
  age: 22,
  skills: ["JS", "React"],
};

console.log(myStringify(obj));
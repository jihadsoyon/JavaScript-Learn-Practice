# JavaScript Problem Solving Series 🚀

This repository contains professional implementations of complex JavaScript logic and system design patterns. Each solution is built to handle edge cases, performance constraints, and real-world production scenarios.

---

## 📋 Table of Contents

1. [Async Pool (Concurrency Control)](#1-async-pool-concurrency-control)
2. [Memoize with TTL (Cache)](#2-memoize-with-ttl-cache)
3. [Tiny Redux Implementation](#3-tiny-redux-implementation)
4. [Custom JSON Stringify](#4-custom-json-stringify)
5. [Virtual DOM Diff Algorithm](#5-virtual-dom-diff-algorithm)
6. [Promise Retry System](#6-promise-retry-system)
7. [Dependency Resolver (Topological Sort)](#7-dependency-resolver-topological-sort)

---

## 1. Async Pool (Concurrency Control)
**Goal:** Limit the number of asynchronous tasks running simultaneously to prevent overloading APIs or system resources.

- **Core Concept:** Throttling via `Promise.race()`.
- **Use Case:** API rate limiting, web scraping, and bulk file uploads.
- **Example:** `asyncPool(2, tasks, taskFn)` ensures only 2 promises execute at any given time.

## 2. Memoize with TTL (Cache)
**Goal:** Optimize performance by caching function results while preventing memory leaks through an expiration mechanism.

- **Features:** Supports multiple arguments and auto-deletes entries after a specified Time-To-Live (TTL).
- **Implementation:** Uses a `Map` to store values and timestamps for efficient lookups and cleanup.

## 3. Tiny Redux Implementation
**Goal:** Recreate the core architecture of Redux to understand state management, unidirectional data flow, and the observer pattern.

- **Features:** `createStore`, `dispatch`, `getState`, and `subscribe`.
- **Bonus:** Includes a custom `applyMiddleware` implementation for logging and side-effect handling.

## 4. Write Your Own JSON.stringify
**Goal:** Deep dive into recursion and data types by building a custom object-to-string serializer.

- **Handling:** Objects, Arrays, Primitives, and `null`.
- **Edge Cases:** Includes **Circular Reference Detection** using `WeakSet` to prevent infinite recursion and stack overflows.

## 5. Build a Virtual DOM Diff Algorithm
**Goal:** Understand the reconciliation process used by modern frameworks like React.

- **Logic:** Recursively compares an `oldTree` and a `newNode` to identify differences.
- **Output:** Returns a detailed list of changes (ADD, REMOVE, REPLACE) required to sync the UI with the state.

## 6. Implement Promise.retry
**Goal:** Create a robust auto-retry system for flaky asynchronous operations.

- **Features:** Configurable retry attempts and delay (polling/backoff strategy).
- **Utility:** Essential for production-grade network requests where temporary failures are expected.

## 7. Dependency Resolver (Topological Sort)
**Goal:** Resolve the correct execution order for tasks based on their dependencies.

- **Algorithm:** Depth-First Search (DFS) based Topological Sort.
- **Edge Case:** Includes advanced **Circular Dependency Detection** to prevent deadlocks in the dependency graph.

---

## 🛠️ How to use
You can run any of these scripts using Node.js to see the test cases and console logs in action:
```bash
node <filename>.js
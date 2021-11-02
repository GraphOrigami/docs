import { ExplorableGraph } from "@explorablegraph/explorable";

export default function defined(variant) {
  const graph = ExplorableGraph.from(variant);
  return {
    async *[Symbol.asyncIterator]() {
      for await (const key of graph) {
        const value = await graph.get(key);
        if (value !== undefined) {
          yield key;
        }
      }
    },

    async get(...keys) {
      return await graph.get(...keys);
    },
  };
}

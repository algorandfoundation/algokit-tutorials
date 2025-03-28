---
type: lesson
title: Historical Blocks
focus: /src/utils.ts
---

# Historical Blocks

This time, let's go back in time to the early days of Algorand's history. To do this, we need a different tool, called the Indexer.

The Algorand node software, called algod, which was used to get the current network status and latest block in the previous two lessons, only stores the last 1,000 rounds by default.

The Indexer leverages a Postgres database that stores the entire chain from the genesis block and allows fetching and querying data across the history of the network.

## Task: Inspect a Old Block

Use the `AlgorandClient` to fetch a block from the early history of the chain:

```ts add={2,3}
export async function getBlockFromIndexer(round: bigint) {
  const block = await algorand.client.indexer.lookupBlock(round).do();
  return block;
}
```

Fix the code at right so that clicking the button will fetch a special old block on Algorand MainNet. It will be visualized as an interactive tree.

This is a very special block because Block 62440 was the first time someone transacted on Algorand. What does it contain? Is there anything special about the transaction?

## Further Reading

Use Lora the explorer to search for an old MainNet block at <a href="https://lora.algokit.io/mainnet" target="_blank">lora.algokit.io</a>.

Learn more about installing the Indexer in the Developer Portal <a href="http://dev.algorand.co/nodes/installation/indexer-installation" target="_blank">here</a>.

Explore Indexer's REST endpoints in the Developer Portal <a href="http://dev.algorand.co/reference/rest-api/overview#indexer-rest-endpoints" target="_blank">here</a>.

---
aelip: 38
network: Optimism & Ethereum
title: Upfront Deals Large, Custom Allow Lists
status: Implemented
author: AlexTheLizard (@AlexTheLizard)
Release: upcoming
Implementor: AlexTheLizard
created: 10-14-2022
---

## Simple Summary

This AELIP proposes to use a merkle tree to add a new type of upfront Aelin deal with a large custom allow list (e.g. 100K addresses) with different allowance amounts per address. The current allow list feature uses an array can only handle a small amount of addresses (under 50).

## Abstract

Protocols or large holders may want to reward a large number of addresses with custom allowance amounts to access their upfront Aelin deal. Protocols or large holders can run an offchain script to generate a csv file with several hundred thousand addresses and custom amounts based on each wallet's activity level onchain or any logic the protocol desires.

Using the new pool type a protocol or larger holder can upload this list during the pool creation process, which Aelin uses to create a merkle root that determines each wallets allowance and ability to access the upfront Aelin deal.

## Motivation

Aelin received a request to do a large pool with as many as 10000 addresses each with their own allowance and ability to purchase deal tokens. The proposed changes are the only way to meet this criteria. The current code uses an array for custom lists which is not scalable past a small amount of addresses in a pool.

## Specification

### Overview

During the deal creation process Aelin saves the large csv provided by a protocol or large holder and saves it to ipfs, we also create a merkle tree on the data and we pass the ipfsHash and the merkleRoot to the contract during deal creation.

When a user goes to the pool page to participate we pull the file from ipfs and check if their address is in the list. If their address is in the list we then check onchain if they have purchased pool tokens (they only get one purchase per merkle deal) and if they have not purchase pool tokens yet they may purchase tokens by passing their merkle leaf data to the contract when they accept the deal. They may purchase an amount up to their allowance and they are only able to invest in this pool once. The address is unable to buy more in a second attempt.

### Rationale

To allow protocols or large holders the ability to have larger, custom deals with huge lists of addresses each with their own custom allowance.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

Upon creation, the UpFrontDeal contracts will accept a merkleRoot and ipfsHash if this is a merkle deal. Also, a new `MerkleTree.sol` library will be added for the upfront deal contracts to use. the first function will be a public view that will check if an address has already claimed by passing in the index node where that address exists. The second function will be a public function checking the validity of the addresses claims and setting their index of the tree to being claimed on success. The final function will be a private method which sets the index of the node to having purchased tokens, blocking them from further purchases.

Relevant code found here: https://github.com/AelinXYZ/aelin/pull/103

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

Tests added to the following PR: https://github.com/AelinXYZ/aelin/pull/103

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

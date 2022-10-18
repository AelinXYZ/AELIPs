---
aelip: 40
network: All networks
title: Extra info for vouched direct deals
status: Draft
author: AlexTheLizard (@AlexTheLizard)
Release: upcoming
Implementor: AlexTheLizard
created: 10-14-2022
---

## Simple Summary

This AELIP proposes to let protocols and large holders creating direct deals to optionally share additional information:

1. Twitter handle
2. Website link
3. Mirror post hash
4. Discord username

The Aelin UI will only show this additional data in the verified pools section.

## Abstract

As more investors participate in Aelin Pools and the upcoming deals, it is clear that more information is needed to help understand what protocol or large holder is raising funds or doing an OTC deal and why? Often this is because an early stage project is raising funds and there is no token trading yet.

Also, content for the mirror post hash that is shared must be tied to the sponsor's account (e.g. `mirror.xyz/<sponsor address>/<mirror post hash>`). For direct deals the sponsor is always the account creating the deal initially.

## Motivation

The goal is to simplify the experience for investors to provide them with more information about a direct deal. At the moment there is no way of verifying that information provided by sponsors is accurate so these fields will only be shown in the verified section.

In the near future an AELIP will be presented to allow anyone to vouch for deals and to update the UI to see which deals a specific ENS or address has vouched for. This information will be available for that future section as well, removing the need to rely on the Aelin Council for vouching.

## Specification

### Overview

A new struct will be created and stored in the smart contract for retrieval and display in the UI. This change will not affect the direct deal logic.

### Rationale

Pushing this AELIP now to improve the investor experience and providing protection by only putting these fields in the verified section.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

### Test Cases

<!--Test cases for an implementation are mandatory for AELIPs but can be included with the implementation..-->

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

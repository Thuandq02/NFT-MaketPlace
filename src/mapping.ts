import { MarketItemCreated, MarketItemUpdated } from "../generated/NFTMarketplace/NFTMarketplace"
import { MarketItem } from "../generated/schema"

export function handleMarketItemCreated(event: MarketItemCreated): void {
  let entity = new MarketItem(event.params.tokenId.toString())
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.owner = event.params.owner
  entity.price = event.params.price
  entity.sold = event.params.sold
  entity.createdAt = event.block.timestamp;
  entity.save()
}

export function handleMarketItemUpdated(event: MarketItemUpdated): void {
  let token = MarketItem.load(event.params.tokenId.toString());
  if (token) {
    token.seller = event.params.seller;
    token.owner = event.params.owner;
    token.price = event.params.price;
    token.sold = event.params.sold;
    token.save();
  }
}

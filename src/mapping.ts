import { MarketItemCreated } from "../generated/NFTMarketplace/NFTMarketplace"
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

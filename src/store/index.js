import { proxy } from "valtio";

const state = proxy({
    service : "MarketPlace"
})

export default state
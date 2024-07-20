import { proxy } from "valtio";

const state = proxy({
    service : "MarketPlace",
    plan: '',
    agents: [],
    date: '',
    time: '',
    open: false
})

export default state
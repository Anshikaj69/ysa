import { proxy } from "valtio";

const state = proxy({
    service : "MarketPlace",
    plan: '',
    agents: [{
        name: '',
        option: ''
    }],
    date: '',
    time: '',
    open: false
})

export default state
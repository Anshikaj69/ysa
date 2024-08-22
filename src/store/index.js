import { proxy } from "valtio";

const state = proxy({
    service : "MarketPlace",
    role: 'Customer Support',
    plan: 'No package',
    agents: [{
        name: '',
        option: ''
    }],
    date: '',
    time: '',
    open: false
})

export default state
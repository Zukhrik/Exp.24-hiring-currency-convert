import {httpGet} from './index'

export default {
  getAllCurrencies: () => httpGet({url: '/latest.json'})
}
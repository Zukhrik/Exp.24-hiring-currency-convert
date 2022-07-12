import {httpGet} from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllCurrencies: () => httpGet({url: '/latest.json'})
}
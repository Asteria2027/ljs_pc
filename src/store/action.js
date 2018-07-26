import { myHomeDate } from '@/api/api.js'
import { GET_USERINFO } from './mutation-types.js'
import { getStore } from '@/libs/mUtils.js'

export default {

	async getUserInfo({
		commit,
		state
	}) {
		commit(GET_USERINFO, await myHomeDate({
			userId:getStore('userId'), 
		},{
			headers:{token:getStore('token')}
		}))
	}	
}
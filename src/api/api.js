import * as axios from 'axios'

//https://www.googleapis.com/youtube/v3/search?part=cats&key=AIzaSyBWATqfSwdB0K3uZAz-RHy3qXvNt5mVAi4
const instance = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	responseType: "json",
})




export const authAPI = {
	checkUsers() {
		return axios.get('https://my-json-server.typicode.com/kuberg8/myServer2/users/')
	},
}

export const seachAPI = {
	getSearch(name, amount = 12) {
		return instance.get(`search?part=snippet&maxResults=${amount}&q=${name}&type=video&key=AIzaSyBWATqfSwdB0K3uZAz-RHy3qXvNt5mVAi4`)
	}
}


const ETERNUM_KEY = '********************************'

var url = 'https://www.eternum.io/api/site'
// Uncomment the next line to get it working
// url = 'https://cors-anywhere.herokuapp.com/' + url
fetch(url, {
	headers: {
	    'Authorization': 'Token ' + ETERNUM_KEY,
	},
})

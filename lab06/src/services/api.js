const endpoint = 'http://api.openweathermap.org/data/2.5';
const key = '51956f30f5249489fc3708c2a09ca46e';

export default {

    GenerateURL(service) {
        return endpoint + service + '?appid=' + key;
    },

    GetForecastByCoords(latitude, longitude) {
        return fetch(this.GenerateURL('/forecast') + '&lat=' + latitude + '&lon=' + longitude + '&units=metric')
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch(() => {
                console.error('unable to fetch forecast by coords');
            })
    }
}
<template>
    <div>
        <h1><i id="icon" class="fas fa-thermometer-half"></i>Weather</h1>
        <h4><i>{{this.location}}</i></h4>
        <ul class="list-inline" id="todo-list" v-show="days.length">
            <li class="list-inline-item" v-for="day in days">
                <h5>{{formatDate(day.dt)}}</h5>
                <img height="100px" :src="'http://openweathermap.org/img/w/' + day.weather[0].icon + '.png'"/>
                <p>{{day.weather[0].description}}</p>
                <p>{{day.main.temp}}°C</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import API from '@/services/api';

    export default {
        data: () => ({
            location: '',
            days: []
        }),

        methods: {
            formatDate(time) {
                const date = new Date(time*1000);
                const weekdays = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ]
                return weekdays[date.getDay()] + ' ' + date.getDate() + '/' + date.getMonth();
            },

            formatDailyList(days) {
                const mydays = [];
                let diff = 0;
                let i = 0;
                
                days.forEach(day => {
                    const date = new Date(day.dt*1000);
                    const dateday = parseInt(date.getDate());
                    
                    if (mydays.length == 0 && date.getHours() > 16) {
                        mydays[i] = day;
                        i++;
                    }

                    if (day !== mydays[i] && dateday !== diff && date.getHours() > 12 && date.getHours() < 16) {
                        mydays[i] = day;
                        i++;
                        diff = dateday;
                    }
                });
                return mydays;
            },
            
            async showDays(position) {
                const result = await API.GetForecastByCoords(position.coords.latitude, position.coords.longitude);
                this.location = result.city.name + ", " + result.city.country;
                this.days = this.formatDailyList(result.list);
            },

            positionFound(position) {
                this.showDays(position);
            },

            getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.positionFound);
                } else {
                    console.log('Geolocation is not supported by this browser.');
                }
            }
        },

        async created() {
            this.getLocation();
        }
    }

</script>

<style scoped>
    ul {
        padding-top: 40px;
        text-align: center;
    }
    li {
        padding-top: 40px;
        padding-right: 80px;
    }
    h4 {
        padding-top: 40px;
        text-align: center;
    }
    h1 {
        padding: 20px;
    }
    #icon {
        padding-right: 20px;
    }
</style>
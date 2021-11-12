import {
    createStore
} from 'vuex'
export default createStore({
    state: {
        search: '',
        weather: {}
    },
    getters: {
        searchText(state) {
            return state.search + '市'
        }
    },
    mutations: {
        setSearch(state, city) {
            state.search = city
        },
        setWeather(state, city) {
            state.weather = city
        }
    },
    actions: {
        async getWeather({
            commit,
            state
        }, city) {
            //获取数据  拿到对象
            let res = await fetch('//api2.jirengu.com/getWeather.php?city=' + state.search)
            //处理数据
            let ret = await res.json()
            commit('setWeather', ret.result.now)
        }
    }
})
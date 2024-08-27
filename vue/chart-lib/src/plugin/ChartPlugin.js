import {Chart, registerables} from "chart.js/auto";

Chart.register(...registerables);

export default {
    install: (app)=>{
        app.config.globalProperties.$_Chart = Chart
    }
}
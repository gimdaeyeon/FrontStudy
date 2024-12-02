// utils
import axios, {AxiosResponse} from "axios";
import * as Chart from "chart.js";
import {Country, CountrySummaryInfo, CountrySummaryResponse, CovidSummaryResponse} from "./covid";

function $<T extends HTMLElement = HTMLDivElement>(selector: string) {
    return document.querySelector(selector) as T;
}

function getUnixTimestamp(date: Date | string) {
    return new Date(date).getTime();
}

// DOM
const confirmedTotal = $<HTMLSpanElement>('.confirmed-total');
const deathsTotal = $<HTMLParagraphElement>('.deaths');
const recoveredTotal = $<HTMLParagraphElement>('.recovered');
const lastUpdatedTime = $<HTMLParagraphElement>('.last-updated-time');
const rankList = $<HTMLOListElement>('.rank-list');
const deathsList = $<HTMLOListElement>('.deaths-list');
const recoveredList = $<HTMLOListElement>('.recovered-list');
const deathSpinner = createSpinnerElement('deaths-spinner');
const recoveredSpinner = createSpinnerElement('recovered-spinner');

function createSpinnerElement(id: string) {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.setAttribute('id', id);
    wrapperDiv.setAttribute(
        'class',
        'spinner-wrapper flex justify-center align-center',
    );
    const spinnerDiv = document.createElement('div');
    spinnerDiv.setAttribute('class', 'ripple-spinner');
    spinnerDiv.appendChild(document.createElement('div'));
    spinnerDiv.appendChild(document.createElement('div'));
    wrapperDiv.appendChild(spinnerDiv);
    return wrapperDiv;
}

// state
let isDeathLoading = false;
let isRecoveredLoading = false;


// api
function fetchCovidSummary(): Promise<AxiosResponse<CovidSummaryResponse>> {
    const url = 'https://ts-covid-api.vercel.app/api/summary';
    return axios.get(url);
}


enum CovidStatus {
    Confirmed = 'confirmed',
    Recovered = 'recovered',
    Deaths = 'deaths'
}

/**
 *
 * @param {'spain' | 'switzerland'} countryName 스페인과 스위스만 지원됩니다.
 * @returns
 */
function fetchCountryInfo(countryName: string, status: CovidStatus): Promise<AxiosResponse<CovidSummaryResponse>> {
    // params: confirmed, recovered, deaths
    console.log(status);
    const url = `https://ts-covid-api.vercel.app/api/country/${countryName}`;
    return axios.get(url);
}

// methods
function startApp() {
    setupData();
    initEvents();
}

// events
function initEvents() {
    if (!rankList) return;
    rankList.addEventListener('click', handleListClick);
}

async function handleListClick(event: Event) {
    let selectedId;
    if (
        event.target instanceof HTMLParagraphElement ||
        event.target instanceof HTMLSpanElement
    ) {
        selectedId = event.target.parentElement?.id;
    }
    if (event.target instanceof HTMLLIElement) {
        selectedId = event.target.id;
    }
    if (isDeathLoading) {
        return;
    }
    clearDeathList();
    clearRecoveredList();
    startLoadingAnimation();
    isDeathLoading = true;

    console.log({selectedId});

    /**
     * NOTE: 코로나 종식으로 오픈 API 지원이 끝나서 death, recover 데이터는 지원되지 않습니다.
     *       그리고 국가별 상세 정보는 "스페인"과 "스위스"만 지원됩니다.
     */
        // const { data: deathResponse } = await fetchCountryInfo(selectedId, CovidStatus.Deaths);
        // const { data: recoveredResponse } = await fetchCountryInfo(
        //   selectedId,
        //   'recovered',
        // );
    const {data: confirmedResponse} = await fetchCountryInfo(selectedId, CovidStatus.Confirmed,);

    endLoadingAnimation();
    // NOTE: 코로나 종식으로 오픈 API 지원이 끝나서 death, recover 데이터는 지원되지 않습니다.
    // setDeathsList(deathResponse);
    // setTotalDeathsByCountry(deathResponse);
    // setRecoveredList(recoveredResponse);
    // setTotalRecoveredByCountry(recoveredResponse);
    setChartData(confirmedResponse);
    isDeathLoading = false;
}

function setDeathsList(data: CountrySummaryResponse) {
    const sorted = data.sort(
        (a: CountrySummaryInfo, b: CountrySummaryInfo) =>
            getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date),
    );
    sorted.forEach((value: CountrySummaryInfo) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-item-b flex align-center');
        const span = document.createElement('span');
        span.textContent = value.Cases.toString();
        span.setAttribute('class', 'deaths');
        const p = document.createElement('p');
        p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
        li.appendChild(span);
        li.appendChild(p);

        deathsList!.appendChild(li);
    });
}

function clearDeathList() {
    if (!deathsList) return;
    deathsList.innerHTML = "";
}

function setTotalDeathsByCountry(data: CountrySummaryInfo) {
    deathsTotal.innerText = data[0].Cases.toString();
}

function setRecoveredList(data: CountrySummaryResponse) {
    const sorted = data.sort(
        (a: CountrySummaryInfo, b: CountrySummaryInfo) => getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date),
    );
    sorted.forEach((value: CountrySummaryInfo) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-item-b flex align-center');
        const span = document.createElement('span');
        span.textContent = value.Cases.toString();
        span.setAttribute('class', 'recovered');
        const p = document.createElement('p');
        p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
        li.appendChild(span);
        li.appendChild(p);
        recoveredList?.appendChild(li);
        // 옵셔널 체이닝
        // if(recoveredList === null || recoveredList === undefined){
        //     return;
        // }else{
        //     recoveredList.appendChild(li);
        // }
    });
}

function clearRecoveredList() {
    recoveredList.innerHTML = "";
}

function setTotalRecoveredByCountry(data: CountrySummaryResponse) {
    recoveredTotal.innerText = data[0].Cases.toString();
}

function startLoadingAnimation() {
    deathsList.appendChild(deathSpinner);
    recoveredList.appendChild(recoveredSpinner);
}

function endLoadingAnimation() {
    deathsList.removeChild(deathSpinner);
    recoveredList.removeChild(recoveredSpinner);
}

async function setupData() {
    const {data} = await fetchCovidSummary();
    setTotalConfirmedNumber(data);
    setTotalDeathsByWorld(data);
    setTotalRecoveredByWorld(data);
    setCountryRanksByConfirmedCases(data);
    setLastUpdatedTimestamp(data);
}

function renderChart(data: number[], labels: string[]) {
    const lineChart = $('#lineChart') as HTMLCanvasElement;
    const ctx = lineChart.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: 'Confirmed for the last two weeks',
                    backgroundColor: '#feb72b',
                    borderColor: '#feb72b',
                    data,
                },
            ],
        },
        options: {},
    });
}

function setChartData(data: CountrySummaryResponse) {
    const chartData = data.slice(-14).map((value: CountrySummaryInfo) => value.Cases);
    const chartLabel = data
        .slice(-14)
        .map((value: CountrySummaryInfo) => new Date(value.Date).toLocaleDateString().slice(5, -1));
    renderChart(chartData, chartLabel);
}

function setTotalConfirmedNumber(data: CovidSummaryResponse) {
    confirmedTotal.innerText = data.Countries.reduce(
        (total: number, current: Country) => (total += current.TotalConfirmed),
        0,
    ).toString();
}

function setTotalDeathsByWorld(data: CovidSummaryResponse) {
    deathsTotal.innerText = data.Countries.reduce(
        (total: number, current: Country) => (total += current.TotalDeaths),
        0,
    ).toString();
}

function setTotalRecoveredByWorld(data: CovidSummaryResponse) {
    recoveredTotal.innerText = data.Countries.reduce(
        (total: number, current: Country) => (total += current.TotalRecovered),
        0,
    ).toString();
}

function setCountryRanksByConfirmedCases(data: CovidSummaryResponse) {
    const sorted = data.Countries.sort(
        (a: Country, b: Country) => b.TotalConfirmed - a.TotalConfirmed,
    );
    sorted.forEach((value: Country) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-item flex align-center');
        li.setAttribute('id', value.Slug);
        const span = document.createElement('span');
        span.textContent = value.TotalConfirmed.toString();
        span.setAttribute('class', 'cases');
        const p = document.createElement('p');
        p.setAttribute('class', 'country');
        p.textContent = value.Country;
        li.appendChild(span);
        li.appendChild(p);
        rankList.appendChild(li);
    });
}

function setLastUpdatedTimestamp(data: CovidSummaryResponse) {
    lastUpdatedTime.innerText = new Date(data.Date).toLocaleString();
}

startApp();

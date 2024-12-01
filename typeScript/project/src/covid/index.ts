export interface Country {
    Country: string;
    CountryCode: string;
    Date: string;
    NewConfirmed:number;
    NewDeaths:number;
    NewRecovered:number;
    Slug: string;
    TotalConfirmed:number;
    TotalDeaths:number;
    TotalRecovered:number;
}

interface Global{
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}

export interface CovidSummaryResponse {
    Countries: Country[];
    Date: string;
    Global: Global;
}

export interface CountrySummaryInfo{
    Country:string;
    CountryCode:string;
    Date:string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    Slug: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
    Cases:number;
}

export type CountrySummaryResponse = CountrySummaryInfo[];








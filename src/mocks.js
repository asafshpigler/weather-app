const locationAutocompleteResponse = {
    "data": [
        {
            "Version": 1,
            "Key": "210841",
            "Type": "City",
            "Rank": 20,
            "LocalizedName": "Tehran",
            "Country": {
                "ID": "IR",
                "LocalizedName": "Iran"
            },
            "AdministrativeArea": {
                "ID": "07",
                "LocalizedName": "Tehran"
            }
        },
        {
            "Version": 1,
            "Key": "60592",
            "Type": "City",
            "Rank": 23,
            "LocalizedName": "Tengzhou",
            "Country": {
                "ID": "CN",
                "LocalizedName": "China"
            },
            "AdministrativeArea": {
                "ID": "SD",
                "LocalizedName": "Shandong"
            }
        },
        {
            "Version": 1,
            "Key": "188046",
            "Type": "City",
            "Rank": 30,
            "LocalizedName": "Tegucigalpa",
            "Country": {
                "ID": "HN",
                "LocalizedName": "Honduras"
            },
            "AdministrativeArea": {
                "ID": "FM",
                "LocalizedName": "Francisco Morazán"
            }
        },
        {
            "Version": 1,
            "Key": "45253",
            "Type": "City",
            "Rank": 31,
            "LocalizedName": "Teresina",
            "Country": {
                "ID": "BR",
                "LocalizedName": "Brazil"
            },
            "AdministrativeArea": {
                "ID": "PI",
                "LocalizedName": "Piauí"
            }
        },
        {
            "Version": 1,
            "Key": "215854",
            "Type": "City",
            "Rank": 31,
            "LocalizedName": "Tel Aviv",
            "Country": {
                "ID": "IL",
                "LocalizedName": "Israel"
            },
            "AdministrativeArea": {
                "ID": "TA",
                "LocalizedName": "Tel Aviv"
            }
        },
        {
            "Version": 1,
            "Key": "234337",
            "Type": "City",
            "Rank": 31,
            "LocalizedName": "Tepic",
            "Country": {
                "ID": "MX",
                "LocalizedName": "Mexico"
            },
            "AdministrativeArea": {
                "ID": "NAY",
                "LocalizedName": "Nayarit"
            }
        },
        {
            "Version": 1,
            "Key": "246100",
            "Type": "City",
            "Rank": 32,
            "LocalizedName": "Tetouan",
            "Country": {
                "ID": "MA",
                "LocalizedName": "Morocco"
            },
            "AdministrativeArea": {
                "ID": "01",
                "LocalizedName": "Tanger-Tétouan-Al Hoceïma"
            }
        },
        {
            "Version": 1,
            "Key": "61484",
            "Type": "City",
            "Rank": 33,
            "LocalizedName": "Tengchong",
            "Country": {
                "ID": "CN",
                "LocalizedName": "China"
            },
            "AdministrativeArea": {
                "ID": "YN",
                "LocalizedName": "Yunnan"
            }
        },
        {
            "Version": 1,
            "Key": "245068",
            "Type": "City",
            "Rank": 35,
            "LocalizedName": "Temara",
            "Country": {
                "ID": "MA",
                "LocalizedName": "Morocco"
            },
            "AdministrativeArea": {
                "ID": "04",
                "LocalizedName": "Rabat-Salé-Kénitra"
            }
        },
        {
            "Version": 1,
            "Key": "298095",
            "Type": "City",
            "Rank": 35,
            "LocalizedName": "Tembisa",
            "Country": {
                "ID": "ZA",
                "LocalizedName": "South Africa"
            },
            "AdministrativeArea": {
                "ID": "GT",
                "LocalizedName": "Gauteng"
            }
        }
    ],
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=73043",
        "expires": "Sun, 04 Aug 2019 10:05:40 GMT"
    },
    "config": {
        "url": "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=SiFXmNAuHXgqluXO1VYTNfiyfZWOUnmi&q=te&language=en-us",
        "method": "get",
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1
    },
    "request": {}
}

const currentWeatherResponse = {
    "data": [
        {
            "LocalObservationDateTime": "2019-08-03T10:55:00-03:00",
            "EpochTime": 1564840500,
            "WeatherText": "Sunny",
            "WeatherIcon": 1,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 31.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 88,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "MobileLink": "http://m.accuweather.com/en/br/teresina/45253/current-weather/45253?lang=en-us",
            "Link": "http://www.accuweather.com/en/br/teresina/45253/current-weather/45253?lang=en-us"
        }
    ],
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public",
        "expires": "Sat, 03 Aug 2019 14:12:57 GMT"
    },
    "config": {
        "url": "http://dataservice.accuweather.com/currentconditions/v1//45253?apikey=SiFXmNAuHXgqluXO1VYTNfiyfZWOUnmi&language=en-us",
        "method": "get",
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1
    },
    "request": {}
}

const forecastResponse = {
    "data": {
        "Headline": {
            "EffectiveDate": "2019-08-03T07:00:00-03:00",
            "EffectiveEpochDate": 1564826400,
            "Severity": 7,
            "Text": "Becoming less humid from today to tomorrow",
            "Category": "humidity",
            "EndDate": "2019-08-04T19:00:00-03:00",
            "EndEpochDate": 1564956000,
            "MobileLink": "http://m.accuweather.com/en/br/teresina/45253/extended-weather-forecast/45253?unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/br/teresina/45253/daily-weather-forecast/45253?unit=c&lang=en-us"
        },
        "DailyForecasts": [
            {
                "Date": "2019-08-03T07:00:00-03:00",
                "EpochDate": 1564826400,
                "Temperature": {
                    "Minimum": {
                        "Value": 23,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 36.8,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 3,
                    "IconPhrase": "Partly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 33,
                    "IconPhrase": "Clear",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/br/teresina/45253/daily-weather-forecast/45253?day=1&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/br/teresina/45253/daily-weather-forecast/45253?day=1&unit=c&lang=en-us"
            },
            {
                "Date": "2019-08-04T07:00:00-03:00",
                "EpochDate": 1564912800,
                "Temperature": {
                    "Minimum": {
                        "Value": 23.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 36.3,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 2,
                    "IconPhrase": "Mostly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 35,
                    "IconPhrase": "Partly cloudy",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/br/teresina/45253/daily-weather-forecast/45253?day=2&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/br/teresina/45253/daily-weather-forecast/45253?day=2&unit=c&lang=en-us"
            },
            {
                "Date": "2019-08-05T07:00:00-03:00",
                "EpochDate": 1564999200,
                "Temperature": {
                    "Minimum": {
                        "Value": 24.4,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 35.2,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 4,
                    "IconPhrase": "Intermittent clouds",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 36,
                    "IconPhrase": "Intermittent clouds",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/br/teresina/45253/daily-weather-forecast/45253?day=3&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/br/teresina/45253/daily-weather-forecast/45253?day=3&unit=c&lang=en-us"
            },
            {
                "Date": "2019-08-06T07:00:00-03:00",
                "EpochDate": 1565085600,
                "Temperature": {
                    "Minimum": {
                        "Value": 23.3,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 34.5,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 6,
                    "IconPhrase": "Mostly cloudy",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 36,
                    "IconPhrase": "Intermittent clouds",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/br/teresina/45253/daily-weather-forecast/45253?day=4&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/br/teresina/45253/daily-weather-forecast/45253?day=4&unit=c&lang=en-us"
            },
            {
                "Date": "2019-08-07T07:00:00-03:00",
                "EpochDate": 1565172000,
                "Temperature": {
                    "Minimum": {
                        "Value": 23.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 34.5,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 4,
                    "IconPhrase": "Intermittent clouds",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 34,
                    "IconPhrase": "Mostly clear",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://m.accuweather.com/en/br/teresina/45253/daily-weather-forecast/45253?day=5&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/br/teresina/45253/daily-weather-forecast/45253?day=5&unit=c&lang=en-us"
            }
        ]
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=1062",
        "expires": "Sat, 03 Aug 2019 14:42:57 GMT"
    },
    "config": {
        "url": "http://dataservice.accuweather.com/forecasts/v1/daily/5day//45253?apikey=SiFXmNAuHXgqluXO1VYTNfiyfZWOUnmi&language=en-us&metric=true",
        "method": "get",
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1
    },
    "request": {}
}

export {
    locationAutocompleteResponse,
    currentWeatherResponse,
    forecastResponse,
}
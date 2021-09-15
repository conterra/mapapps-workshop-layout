module.exports = {
    root: {
        apptitle: "map.apps 4 Sample",
        custominfo: {
            imprint: {
                title: "Imprint",
                tooltip: "Show imprint",
                content: "<p>This is a sample for an imprint.</p>"
            }
        },
        map: {
            koeln1: {
                title: "Basic Data",
                districts: {
                    title: "City Districts",
                    text: "Cologne's city district <b>{STV_NAME}</b>."
                },
                boroughs: {
                    title: "Boroughs",
                    text: "Boroughs <b>{NAME}</b> is located in Cologne's precints {STADTBEZIR}."
                },
                precints: {
                    title: "Precints",
                    text: "Cologne's precint {NAME}."
                }
            },
            koeln2: {
                title: "Education and Culture",
                description: "List of all libraries, museums and schools in Cologne.",
                libraries: {
                    title: "Libraries"
                },
                museums: {
                    title: "Museums",
                    text: "Museum <b>{NAME}</b> is located in Cologne's boroughs {STADTTEIL}."
                },
                schools: {
                    title: "Schools"
                }
            },
            koeln3: {
                title: "Recreation",
                sights: {
                    title: "Tourist Attractions",
                    titleSingle: "Tourist Attraction",
                    text: "Tourist attraction <b>{NAME}</b> is located in Cologne's borough {STADTTEIL}."
                },
                playgrounds: {
                    title: "Playgrounds- and Sports Areas",
                    text: "<b>{Spielplatzname}</b> is located in Cologne's borough {Stadtteil}.",
                    baskets: "Basketball Baskets",
                    goals: "Soccer Goals",
                    tables: "Ping-Pong Tables",
                    walls: "Goal Wall",
                    skate: "Skating",
                    misc: "Miscellaneous"
                },
                places: {
                    title: "Places of Event",
                    titleSingle: "Place of Event",
                    text: "<b>{NAME}</b> is a {expression/carrier} place of event."
                }
            },
            basemaps: {
                street: "Street Map (gray)",
                street2: "Street Map",
                topo: "Topographical Map",
                hybrid: "Aerial (hybrid)"
            }
        },
        common: {
            number: "Number",
            area: "Area [ha]",
            totalArea: "Percentage of the total area [%]",
            name: "Name",
            provider: "Provider",
            address: "Address",
            furtherinfo: "Further Information",
            precint: "Precint",
            district: "District",
            private: "privater",
            municipal: "municipal",
            zip: "Zip code",
            type: "Type"
        }
    },
    "de": true
};

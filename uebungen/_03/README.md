# Layoutworkshop

## LAY03: Anpassen eines Fensters

1. Öffnen Sie die manuelle Konfiguration Ihrer App "sample" und passen Sie die Konfiguration im Abschnitt templates wie folgt an:

*app.json*
```javascript

 "templates": {
            "TemplateModel": {
                "_templates": [
                    {
                        "name": "seasons",
                        "widgets": [
                            {
                                "widgetRole": "basemapChangerWidget",
                                "window": {
                                    "marginBox": {
                                        "t": 40,
                                        "b": 40,
                                        "r": 0,
                                        "w": 500
                                    },
                                    "fixEdgesInViewPort": {
                                        "l": false
                                    },
                                    "closable": false,
                                    "collapsable": true,
                                    "collapseAxis": {
                                        "l": true
                                    }
                                }
                            },
                            {
                                "widgetRole": "drawer_button",
                                "attachTo": "map_topleft",
                                "props": {
                                    "layoutIndex": 0
                                }
                            },
                            {
                                "widgetRole": "sharelink",
                                "window": {
                                    "dockable": false,
                                    "dockingBar": null
                                }
                            },
                            {
                                "widgetRole": "legend",
                                "sublayout": [
                                    "mobile_portrait",
                                    "mobile_landscape"
                                ],
                                "window": {
                                    "dockable": false,
                                    "dockingBar": null
                                }
                            },
                            {
                                "widgetRole": "printing",
                                "window": {
                                    "title": "This is my custom Window Title",
                                    "marginBox": {
                                    "w": 550,
                                    "h": 550
                                    },
                                    "resizable": false
                                }
                            },
                   
                       
                            {
                                "widgetRole": "banner",
                                "sublayout": [
                                    "mobile_portrait"
                                ],
                                "attachTo": "footer_right"
                            }
                        ]
                    }
                ]
            }
        },

```

3. Laden Sie die App im Browser neu öffnen sich das Fenster für die Druck-Funktion.

### Doku
https://docs.conterra.de/en/mapapps/latest/developersguide/concepts/window-system.html#_basic_window_properties





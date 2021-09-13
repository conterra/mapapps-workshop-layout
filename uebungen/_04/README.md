# Layoutworkshop

## LAY04: Widget innerhalb der Anwendung umpositionieren

1. Öffnen Sie die manuelle Konfiguration Ihrer App **sample** und fügen Sie das Bundle **coordinateviewer** im Abschnitt **allowedBundles** hinzu.

*app.json*
```javascript
  "allowedBundles": [
            "system",
            "console",
            "notifier",
            "splashscreen",
            "templatelayout",         
            "map-init",
            "map-preload-2D",
            "map-preload-3D",
            "toolset",
            "banner",
            "basemaptoggler",
            "viewmodeswitcher",
            "mapnavigation",
            "popups-default",
            "scalebar",
            "locateme",
            "printing",
            "share-link",
            "omnisearch",
            "locator-store",
            "toc",
            "console",
            "basemapchanger",
            "template-seasons",          
            "theme-happy",  
            "coordinateviewer"
        ],
```



2. Ergänzen Sie die Konfiguration im Abschnitt ***templates*** um den unten stehenden Codeblock:

*app.json*
```javascript
"widgets": [
    {
    ...
    },
    {
       "widgetRole":"coordinateviewer",
       "attachTo": "map_topright",
       "cssClass": "background-highlight padding-default"
    }
]
```

3. Laden Sie die App im Browser neu öffnen sich das Fenster für die Druck-Funktion.

### Ergebnis
Die Koordinatenanzeige befinden sich nicht mehr in der Fußzeile der Anwendung sondern in der rechten oberen Ecke der Karte. Außerdem hat sie einen farbigen Hintergrund.






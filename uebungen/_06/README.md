# Layoutworkshop

## LAY06 Layout Bundle anlegen

### Anlegen des Bundles

1. Erstellen sie innerhalb des **bundles Verzeichnis** in Visual Studio Code einen Ordner mit dem Namen alternatelayout.

2. Kopieren sie die Datei alternatelayout aus dem Trainings Verzeichnis.

### Verwenden des Bundles innerhalb der App "sample"

1. Öffnen sie in Visual Studio Code die Datei *apps/sample/app.json* und fügen sie die Bundles **alternatelayout** und **console** im Abschnitt *"allowedBundles":[]* ein. 

**Tipp:** Mit SHIFT+ALT+F lässt sich der Inhalt der Datei lesbarer formatieren.

*app.json*
```javascript
...
"load": {
  "allowedBundles": [
      "alternatelayout",
      "console"
  ...
```

2. Um die Bundles, die lokal vom Jetty-Server ausgeliefert werden, in die App zu integrieren, muss außerdem folgender Abschnitt zu Beginn der App-Konfiguration eingefügt werden:

*app.json*
```javascript
...
"load": {
  "bundleLocations": [
      "localbundles", 
      "bundles"
],
  ...
```
3. Nun kann die App im Browser neugeladen werden. Mit **STRG+F12** die Konsole öffnen und überprüfen ob das Bundle *alternatelayout* korrekt geladen wird. Der Status sollte dann auf Active stehen.

### Layout Regeln aus der app.json in Layout-Bundle übertragen

Nun können die in den Übungen LAY03, LAY04 und LAY05 gemachten Änderungen aus der app.json in die manifest.json des *alternatelayout* Bundle **verschoben** werden. Es muss sichergestellt sein, dass die **Einträge aus der app.json Datei entfernt sind**.

Der Abschnitt layout-widgets innerhalb der manifest.json Sollte dann wie folgt aussehen:

*manifest.json*
```javascript
{
    "name": "layoutcontainer",
        "title": "Layoutcontainer Layout",
        "description": "",
        "version": "1.0.0",


        "CSS-Themes-Extension": [{
        "name": "*",
        "files": ["./css/styles.css"]
    }],
        "layout-widgets": [
        {
            "widgetRole": "basemapChangerWidget",
            "priority":2,
            "sublayout": [
                "desktop"
            ],
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
            "sublayout": [
                "desktop"
            ],
            "priority":2,
            "props": {
                "layoutIndex": 0
            }
        },
        {
            "widgetRole": "sharelink",
            "sublayout": [
                "desktop"
            ],
            "priority":2,
            "window": {
                "dockable": false,
                "dockingBar": null
            }
        },
        {
            "widgetRole": "legend",
            "priority":2,
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
            "widgetRole": "banner",
            "priority":2,
            "sublayout": [
                "mobile_portrait"
            ],
            "attachTo": "map_topleft"
        },
        {
            "widgetRole": "banner",
            "priority":2,
            "sublayout": [
                "desktop"
            ],
            "attachTo": "map_bottomleft"
        },

        {
            "widgetRole":"coordinateviewer",
            "priority":2,
            "sublayout": [
                "desktop"
            ],
            "attachTo": "map_topright",
            "cssClass": "background-highlight padding-default"
        },
        {
            "widgetRole": "coordinateviewer",
            "priority":2,
            "sublayout": [
                "tablet_landscape",
                "tablet_portrait",
                "mobile_landscape",
                "mobile_portrait"
            ],
            "attachTo": "map_bottomleft"
        }  ,


        {
            "widgetRole": "printing",
            "priority":2,
            "sublayout": [
                "desktop"
            ],
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
            "widgetRole": "printing",
            "priority":2,
            "sublayout": [
                "tablet_landscape",
                "tablet_portrait"
            ],
            "window": {
                "draggable": false,
                "dndDraggable": false,
                "marginBox": {
                    "l": 20,
                    "w": 300,
                    "t": 120,
                    "b": 60
                }
            }
        }

    ]
}
```
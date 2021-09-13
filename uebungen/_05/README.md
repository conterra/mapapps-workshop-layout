# Layoutworkshop

## LAY05: Responsives Verhalten ergänzen

1. Öffnen Sie die manuelle Konfiguration Ihrer App ***sample*** und ergänzen Sie die Konfiguration im Abschnitt templates um den unten stehenden Codeblock:

*app.json*
```javascript
{
    "widgetRole": "coordinateviewer",
    "sublayout": [
        "tablet_landscape",
        "tablet_portrait",
        "mobile_landscape",
        "mobile_portrait"],
    "attachTo": "map_bottomleft"
},
```

2. Laden Sie die App im Browser neu und verändern sie die Größe des Browserfensters um die Größe eines mobilen Clienten zu simulieren.

3. Öffnen sie erneut die ***app.json*** und fügen sei folgenden Codeblock ein.

*app.json*
```javascript
{
    "widgetRole": "printing",
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
},
```
4. Laden Sie die App im Browser neu und verändern sie die Größe des Browserfensters um die Größe eines mobilen Clienten zu simulieren.

### Ergebnis
Die *Koordinatenanzeige* befinden sich für Browserbreiten zwischen 800px und 1000px unten links. Ansonten oben rechts. Außerdem verändert sich das Verhalten des Fenster für die *Drucken Funktion* abhängig von der Browserfenstergröße.



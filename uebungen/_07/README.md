# Layoutworkshop

## LAY07: CSS Anweisung innerhalb des Layout Bundles

1. Platzieren des coordinateviewer Widgets im Container map_main. Dazu in der manifest.json Datei den Eintrag für den coordinateviewer wie folgt anpassen:

*alternatelayout/manifest.json*
```javascript
{
   "widgetRole": "coordinateviewer",
   "priority": 1,
   "template": "seasons",
   "sublayout": ["desktop"],
   "attachTo": "map_main",
   "cssClass": "background-highlight"
} 
```
2. Legen sie die Datei bundles/alternatelayout/styles/styles.css mit folgendem Inhalt an:

*styles.css*
```css
.map_main .coordinateviewer{
  position: absolute;
  top: 20px;
  right: 20px;
  margin-left: -150px;
} 
```
3. Es muss nun noch mitgeteilt werden, dass die Datei *styles.css* zusammen mit dem Bundle geladen werden soll. Dazu fügen sie den folgen Code Block in die *manifest.json* des Bundles *alternatelayout* ein.

*alternatelayout/manifest.json*
```javascript
...
"CSS-Themes-Extension": [{
   "name": "*",
   "files": ["styles/styles.css"]
}],
"layout-widgets": [
....
```

### Ergebnis
Die Koordinatenanzeige wird oben rechts auf der Karte dargestellt.
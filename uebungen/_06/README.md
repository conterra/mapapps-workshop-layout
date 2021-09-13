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
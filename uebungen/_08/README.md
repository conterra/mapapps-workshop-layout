# Layoutworkshop

## LAY08 Eigenes Theme anlegen

Die folgenden Schritte beschreiben, wie Sie das map.apps Theme **"theme-happy"** an Ihre eigenen Farben anpassen können:

1. Erstellen Sie in Ihrer Entwicklungsumgebung im Ordner bundles/ das Verzeichnis *theme-happy*

2. Erstellen sie innerhalb des Verzeichnis *bundles/theme-happy/* eine Datei *manifest.json* mit folgendem Inhalt:

*theme-happy/manifest.json*
```javascript
{
    "name": "theme-happy",
    "version": "1.0.0",
    "title": "Theme SH",
    "description": "This bundle provides the theme 'sh'. This theme fits best with the seasons layout template and can be used for customization.",
    "vendor": "con terra GmbH",
    "keywords": ["layout"],
    "main": "",
    "layer": "",
    "i18n": [],
    "startLevel": 1,
    "bundle": true,
    "productName": "map.apps",
    "dependencies": {
        "font-mapapps": "~4.9.2"
    },
    "CSS-Themes": [{
            "name": "theme-happy",
            "files": ["font-mapapps:/fonts/fonts.css", "styles/styles.css"]
        }]
}
```

3. Kopieren Sie danach die Datei *themeSettings.less* aus dem Ordner **target\unpacked\layout\theme-everlasting\styles\themeSettings.less** in den Ordner *bundles/theme-happy/styles.*

4. Öffnen Sie die Datei *bundles/theme-happy/styles/themeSettings.less* und setzen Sie die Variable **@themeName** auf den Wert **theme-happy**.

5. In der Datei **gulpfile.js** muss nun das theme-happy aufgenommen werden und anschließend der Jetty Server neugestartet werden.

*gulpfile.js*
```js
mapapps.registerTasks({
    ...
     themes: ['theme-happy'],
    ...
    themeChangeTargets: {
        "vuetify": [
            "theme-happy"
        ]
    }
    ...

```
6. Fügen Sie das Bundle **theme-happy**, welches das neue Theme bereitstellt nun zu Ihrer App hinzu. Außerdem muss das bundle **theme-everlasting** entfernt werden.

*app.json*
```js
"allowedBundles": ["theme-happy","alternatelayout","console...
```

### Ergebnis
Die Anwendung verfügt nun über ein eigenes Theme, das auf dem map.apps everlasting-Theme basiert. Das geerbte Theme wird in der folgenden Übung durch Verändern der LESS-Variablen und anschließendem Kompilieren angepasst.
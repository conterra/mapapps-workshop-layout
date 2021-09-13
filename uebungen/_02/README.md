# Layoutworkshop

## LAY02: Einfügen eigener CSS Anweisungen in einer App

1. Erstellen Sie im Ordner   ***"src\main\js\apps\sample"*** eine CSS Datei mit dem Dateinamen ***app.css***
2. Ergänzen sie den folgenden Codeblock in der ***app.json*** hinzu. Achten sie dabei, dass er innerhalb des Objektes ***"load":{...}*** platziert wird.

*app.json*
```javascript
"styles": ["${app}:app.css"],
```

3. Öffnen sie anschließend die Datei *app.css*. und fügen folgenden Inhalt ein:

*app.css*
```css
/*Kopfzeilen Hintergrundfarbe*/
.ctAppRoot .ct-application-header {
    background: #003064;
}
```
Aktualisieren sie die Anwendung mit **F5** im Browser.

4. Zurück in der manuellen Konfiguration soll nun eine zusätzliche CSS Anweisung eingefügt werden.

*app.css*
```css
/*Kartenhintergrund abdunkeln umfärben*/
.ctAppRoot .ctMap {
    background-color: #3c3c3c;
}
```
Aktualisieren sie die Anwendung mit **F5** im Browser.

### Ergebnis
Die Kopfzeile der Anwendung sollte jetzt grün sein. Außerdem sollte Im Hintergrund der Karte dunkelgrau statt weiß erscheinen. 


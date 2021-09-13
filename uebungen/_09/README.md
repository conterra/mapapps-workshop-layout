# Layoutworkshop

## LAY09 Anpassen von Farbwerten in den Theme-Settings

1. Öffnen Sie in Visual Studio Code die Datei **bundles/theme-happy/styles/themeSettings.less**

2. Ändern Sie den Wert der Variablen **@ct-highlight-color** auf eine Farbe ihrer Wahl (z.B. #8e44ad).

3. Ändern Sie den Wert der Variablen **@ct-header-background-color** auf einen mitteldunklen Grauton. Dazu kann die LESS-Funktion "darken" verwendet werden. Setzten Sie also beispielsweise für die Variable als Wert **darken(@container-background-color, 10%);** ein.

4. Da der Header und der Footer dieselbe Farbe bekommen sollen, kann die Variable **@ct-footer-background-color** mit dem Wert **@ct-header-background-color** belegt werden. Dadurch wird die Farbe vom Header auch für den Footer verwendet.

5. Visual Studio Code erkennt beim Speichern der Datei *themeSettings.less* die Änderungen automatisch und kompiliert daraufhin die LESS Dateien. Visual Studio Code wird man über den Abschluss des Kompilierungs-Vorgang informiert. Rufen Sie anschließend die Sample App im Browser erneut auf **(http://localhost:9090/?lang=de)**.

*themeSettings.less*
```less
@ct-highlight-color: #8e44ad;

@ct-header-background-color: darken(@container-background-color, 10%);
@ct-footer-background-color: @ct-header-background-color;
```

### Hinweis
Folgender Eintrag muss, falls vorhanden, aus der Datei apps/krankenhaus/app.css entfernen.

*app.css*
```css
.ctAppRoot .header {
    background: #2ecc71;
}
```

## Ergebnis
Die App erscheint nun in einem neuen Farbschema.

### Hinweis
Gegebenenfalls muss der Browsercache geleert werden, bevor ein Ergebnis sichtbar ist. Das kann in den meisten Browsern mit der Tastenkombination **Strg+Umschalt+Entf** gemacht werden.

# LS12: Infografik – COVID-19-Rezession
>Jairus Joer, 09.02.2021

## Voraussetzungen
Folgende Programme sind Voraussetzung zur Ausführung der lokalen Entwicklungsumgebung:

- Node.js v14.x.x
- NPM v6.x.x

---

## Installation
Navigiere in das Stammverzeichnis des Projektes und führe folgenden Befehl im Terminal aus, um nötige Packages zu installieren:

```bash
npm install
```

Welche Packages installiert werden, kann in der `package.json` unter `dependencies` eingsehen werden.

Nachdem der Prozess abgeschlossen wurde, müssen eventuell einige Packages neu kompiliiert werden:

```bash
npm rebuild
```

---

## Ausführung
Um die lokale Entwicklungsumgebung zu starten, führe folgenden Befehl aus:

```bash
npm run start
```

Die Live-Preview der Website findet man unter `http://localhost:3000/`, sofern im Terminal keine alternative URL angegeben wird.

Um das Projekt für den Einsatz auf einem Webserver zu kompiliieren, verwende folgenden Befehl:

```bash
npm run build
```

Der Inhalt des `build`-Ordners kann nach erfolgreicher Kompilierung auf einen Webserver transferiert werden.
<script src="https://unpkg.com/react@15.6.1/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15.6.1/dist/react-dom.js"></script>
<link rel="stylesheet" type="text/css" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"/>
<style>body { color: red }</style>

# Coders Camp 2020/2021 | Projekt Zespołowy | React

- [Zespół projektowy](#zespół-projektowy)
- [E-Wolontariat](#e-wolontariat)
  - [Demo](#demo)
  - [Cel projektu](#cel-projektu)
  - [Działanie aplikacji](#działanie-aplikacji)
    - [Menu Główne](#menu-główne)
      - [Profil ogólny użytkownika](#profil-ogólny)
      - [Profil wolontariusza](#profil-wolontariusza)
      - [Strona ze wszystkimi wolontariuszami](#strona-ze-wszystkimi-wolontariuszami)
      - [Profil organizacji](#profil-organizacji)
      - [Strona ze wszystkimi zadaniami](#strona-ze-wszystkimi-zadaniami)
      - [Zadanie dla wolontariusza](#zadanie-dla-wolontariusza)
- [Development aplikacji](#development-aplikacji)
  - [Wykorzystywane technologie](#wykorzystywane-technologie)
  - [Uruchomienie projektu](#uruchomienie-projektu)
  - [Organizacja pracy](#organizacja-pracy)

## Zespół projektowy

Zespół pracował w ramach kursu [CodersCamp 2021](https://coderscamp.pl/).
Aplikację została wykonana przez uczestników kursu pod okiem dwóch mentorów.

**Mentorzy**: Dariusz Knysak, Paweł Michalak

**Uczestnicy**:

- [Marcin Barszcz](https://github.com/marcinnnnb)
- [Agnieszka Bury](https://github.com/angbur)
- [Agnieszka Kapelańczyk](https://github.com/MysiaPysia16)
- [Marta Pejkowska](https://github.com/MartaPejkowska)

## E-Wolontariat

![This is an image](https://github.com/marcinnnnb/CodersCamp2021-Project-React-Node-eWolontariat/blob/9d64011d85607468474710fbb63e6153c1418b09/src/assets/img/hero.png)

### Demo

Wersja demonstracyjna aplikacji jest dostępna [TUTAJ]().
### Cel projektu

Celem projektu było napisanie aplikacji wykorzystującej wiedzę nabytą z drugiego działu kursu tj. z następujących technologi: React, Redux-Toolkit, Material-UI.
Zespół projektowy zdecydował się na aplikację własnego pomysłu. E-Wolontariat jest aplikacją umożliwiającą użytkownikowi zapisanie się do grona Wolontariuszy i aktywnie działanie wśród nich. Możliwe jest również stworzenie profilu organizacji, która poszukuje wolontariuszy i udostępnia aktualne zadnia.

Aplikacja została wykonana wg wymagań dostarczonych przez organizatorów CodersCamp.
Szablon projektu dostępny jest [TUTAJ](https://github.com/KrystianKjjk/CodersCamp2020.Project.FullStack-Node-React.OrganizationApp/blob/main/README.md).

Zespół projektowy przygotował design przy użyciu aplikacji FIGMA. Projekt graficzny dostępny jest [TUTAJ](https://www.figma.com/file/sLIhQsE4ADtUJnVhFKfWij/Wolontariusze?node-id=0%3A1).

### Działanie aplikacji

#### Menu Główne

Po uruchomieniu aplikacji wyświetlone zostaje Menu Główne zgodnie z założeniem Single-Page. Przesuwająć się w dół mamy widocznych szereg przycisków, które przenoszą nas na odpowiednie strony aplikacji. Widoczna są logo aplikacji oraz odnośniki do strony organizatora kursu i repozytorium projektu na githubie.
Z poziomu każdego ekranu jest możliwość powortu do menu głównego po naciśnięciu logo aplikacji znajdującego się w lewym górnym rogu ekranu.

##### Profil ogólny użytkownika

Ogólny profil użytkownika wyświetlający podstawowe informacje podane przy rejestarcji. Z tego modułu jest możliwość wyświetlenia dostępnych zadań ale przypisanie ich do danego użytkownika będzie możliwe po zostaniu wolontariuszem.

##### Profil wolontariusza

Profil widoczny tylko dla użytkowników zarejestrowanych jako wolontariusze. Jest możliwość komentowania wolontariuszy oraz kontaktu z nimi.

##### Strona ze wszystkimi wolontariuszami

Lista dostępnych wolontariuszy. W tym module jest możliwość filtrowania użytkowników wg kategorii, kontaktu z nim poprzez wysłanie wiadomości e-mail. 

##### Profil organizacji
##### Strona ze wszystkimi zadaniami

Lista dostępnych zadań.  W tym module jest możliwość filtrowania zadań wg kategorii oraz przejscie na stronę zadania poprzez kliknięcie przycisku 'Pomagam". 

##### Zadanie dla wolontariusza

## Development aplikacji

### Wykorzystywane technologie

W trakcie developmentu wykorzystujemy:

- Komunikacja klient — serwer
- Functional Component
- React hooks
- Tworzenie list komponentów
- JSX
- Pisanie Testów

### Uruchomienie projektu

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Zainstaluj zależności za pomocą komendy: `npm install`
2. Wystartuj serwer developerski `npm run dev`

Aplikacja będzie dostępna pod adresem [TUTAJ](https://github.com/marcinnnnb/CodersCamp2021-Project-React-Node-eWolontariat/new/main)

Kod produkcyjny aplikacji znajduje się w katalogu `src`.

### Organizacja pracy

Przy użyciu narzędzia Trello rozdzielono poszczególne moduły. Każdy z członków zespołu miał do wykoniania jeden moduł. Komunikacja zespołu odbywała się głównie przez Google Meets i Discord.

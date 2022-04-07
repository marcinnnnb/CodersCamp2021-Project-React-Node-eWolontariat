# CodersCamp 2021/2022 | Projekt Zespołowy | React

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
- [Agnieszka Kapelańczyk](https://github.com/AgnieszkaKapelanczyk)
- [Marta Pejkowska](https://github.com/MartaPejkowska)

## E-Wolontariat

![This is an image](https://github.com/marcinnnnb/CodersCamp2021-Project-React-Node-eWolontariat/blob/9d64011d85607468474710fbb63e6153c1418b09/src/assets/img/hero.png)

### Demo

Wersja demonstracyjna aplikacji jest dostępna [TUTAJ](https://coders-camp2021-project-react-node-e-wolontariat-one.vercel.app/).
### Cel projektu

Celem projektu było napisanie aplikacji wykorzystującej wiedzę nabytą z drugiego działu kursu tj. z następujących technologii: React, Redux-Toolkit, Material-UI.
Zespół projektowy zdecydował się na aplikację własnego pomysłu. eWolontariat jest aplikacją umożliwiającą użytkownikowi zapisanie się do grona Wolontariuszy i aktywnie działanie wśród nich. Możliwe jest również stworzenie profilu organizacji, która poszukuje wolontariuszy i udostępnia aktualne zadania.

Aplikacja została wykonana wg wymagań dostarczonych przez organizatorów CodersCamp.
Szablon projektu dostępny jest [TUTAJ](https://github.com/KrystianKjjk/CodersCamp2020.Project.FullStack-Node-React.OrganizationApp/blob/main/README.md).

Zespół projektowy przygotował design przy użyciu aplikacji FIGMA. Projekt graficzny dostępny jest [TUTAJ](https://www.figma.com/file/sLIhQsE4ADtUJnVhFKfWij/Wolontariusze?node-id=0%3A1).

### Działanie aplikacji

#### Menu Główne

Po uruchomieniu aplikacji wyświetlone zostaje Menu główne zgodnie z założeniem SPA (Single Page Application). Homepage został podzielony na sześć sekcji, z których możemy się przenieść dalej (wyrenderować inne komponenty aplikacji). W stopce znajduje się logo aplikacji oraz odnośniki do strony organizatora kursu i repozytorium projektu na Githubie. Założenia aplikacji: pozyskiwanie nowych wolontariuszy oraz budowanie listy zadań (wypełnienie odpowiednich formularzy). 
Z poziomu każdego ekranu jest możliwość powrotu do Menu głównego po naciśnięciu logo aplikacji znajdującego się w lewym górnym rogu ekranu.

##### Profil ogólny użytkownika

Ogólny profil użytkownika wyświetla podstawowe informacje podane przy rejestarcji. Aby przypisać do swojego profilu status wolontariusza należy wypełnić formularz, który pojawia się po kliknięciu przycisku "Zakładam sobie profil wolontariusza".

##### Profil wolontariusza

Profil użytkownika ze statusem wolontariusza. Jest możliwość komentowania wolontariuszy oraz kontaktu z nimi. 

##### Strona ze wszystkimi wolontariuszami

Lista dostępnych wolontariuszy. W tym module jest możliwość filtrowania użytkowników wg kategorii, kontaktu z nim poprzez wysłanie wiadomości e-mail. 

##### Profil organizacji

Na tym profilu widoczny jest krótki opis organizacji, lista udostępnionych zadań przez nią oraz liczba wolontariuszy potrzebna do konkretych akcji. Jest możliwość dodania kolejnych zadań przez wypełnienie odpowiedniego formularza.

##### Strona ze wszystkimi zadaniami

Lista dostępnych zadań.  W tym module jest możliwość filtrowania zadań wg kategorii oraz przejscie na stronę zadania poprzez kliknięcie przycisku "Pomagam". 

##### Zadanie dla wolontariusza

Szczegółowy opis zadania z widoczną sekcją komentarzy. Wolontariusz może przypisać się do zadania poprzez kliknięcie przycisku "Pomagam".

## Development aplikacji

### Wykorzystywane technologie

W trakcie developmentu wykorzystujemy:

- Komunikacja klient — serwer
- Functional Component
- React hooks
- Tworzenie list komponentów
- JSX
- React-Modal
- Testy jednostkowe
- Redux Thunk

### Uruchomienie projektu

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Zainstaluj zależności za pomocą komendy: `npm install`
2. Wystartuj serwer developerski `npm run dev`

Kod produkcyjny aplikacji znajduje się w katalogu `src`.

### Organizacja pracy

Przy użyciu narzędzia Trello rozdzielono poszczególne moduły. Każdy z członków zespołu miał do wykoniania jeden moduł. Komunikacja zespołu odbywała się głównie przez Google Meets i Discord.

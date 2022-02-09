import pies from '../../img/tasks/pies.jpg';
import książki from '../../img/tasks/książki.png';
import karmnik from '../../img/tasks/karmnik.png';
import chemia from '../../img/tasks/chemia.png';
import sesja from '../../img/tasks/sesja.png';
 
const Tasks =
     [
        {
            "id": 10,
            "title": "Pomoc przy wyprowadzaniu psów ze schroniska Promyk",
            "categories": [
              "Wyprowadznie psów"
            ],
            "image": `${pies}`,
            "amount": "16",
            "sign":"4",
            "action_description": "Szukamy osób kochająych zwierzęta i chętnych do wyprowadzania naszych podopiecznych na spacery. W naszym schronisku znajduje się ok. 120 psów i 50 kotów. Niestety nasi pracownicy nie są w stanie wyprowadzić każdego z nich na spacer codziennie przez co zwierzęta załatwiają się w boksach. Codzienny spacer dla naszych milisińskich to naprawdę wielka radość. Zapraszamy do zgłaszania się! ",
            "action_short_description": "Wyprowadzanie psów ze schroniska",
            "comments":"Byłem wolontrariuszem w zeszłym roku i polecam wszystkim ! w tym roku też się zapisuje!"
          },
          {
            "id": 11,
            "title": "Wyprowadzanie psa na spacer",
            "categories": [
              "Wyprowadznie psów"
            ],
            "image": `${pies}`,
            "amount": "1",
            "sign":"0",
            "action_description": "Wczoraj złamałam nogę i bardzo ciężko mi się poruszać o kulach. Szukam kogoś kto mógłby przez tydzień wyprowadzać mojego psa- 3 razy dziennie",
            "action_short_description": "Szukam kogoś kto będzie wyprowadzać psa dopóki moja noga nie wydobrzeje",
            "comments":"Pani Asia to złota kobieta, chętnie bym pomógł gdybym nie był w tym czasie w delegacji :("
          },
          {
            "id": 12,
            "title": "Przygotowanie do egzaminu na architekturę",
            "categories": [
              "Korepetycje"
            ],
            "image": `${książki}`,
            "amount": "1",
            "sign":"0",
            "action_description": "Szukamy kogoś kto poprowadzi webinarium dotyczące egzaminu na architekturę. Opowie jak to wyglądało z jego perspektywy i czego możemy się spodziwać",
            "action_short_description": "Krótkie webinarium: co trzeba wiedzieć przed egzaminem wstępnym na architekturę?",
            "comments":"Wow, super pomysł"
          },
          {
            "id": 13,
            "title": "Szkolne warszaty z budowania karmników dla ptaków",
            "categories": [
              "Korepetycje"
            ],
            "image": `${karmnik}`,
            "amount": "25",
            "sign":"10",
            "action_description": "Szkoła nr 16 organizuje serię warsztatów poświęconym pracom ręcznym. W tym miesiącu zapraszamy na warsztaty poświęcone budowaniu karmników dla ptaków",
            "action_short_description": "Pomóż nauczyć dzieci z podstawówki nr 16 budować własne karmniki!",
            "comments":"Wow, super pomysł!"
          },
          {
            "id": 14,
            "title": "Szukam kogoś do przetłumaczenia ogłoszenia na język niemiecki",
            "categories": [
              "Tłumaczenia"
            ],
            "image": `${książki}`,
            "amount": "1",
            "sign":"1",
            "action_description": "Wczoraj zaginęła moja kotka. 7 letnia Pysia. Z racji tego że mieszkamy blisko granicy niemieckiej, chciałąbym tam też rozwiesić parę ogłoszeń ale nie znam niemieckiego. Pilnie poszukuję kogoś kto mi pomoże w tej sprawie",
            "action_short_description": "Szukam kogoś do przetłumaczenia ogłoszenia o zaginięciu kotki na język niemiecki",
            "comments":"Chętnie pomogę"
          },
          {
            "id": 15,
            "title": "Warsztaty chemiczne dla najmłodszych",
            "categories": [
              "Korepetycje"
            ],
            "image": `${chemia}`,
            "amount": "3",
            "sign":"1",
            "action_description": "Szkoła nr 16 organizuje serię warsztatów poświęconym poznaniu różnych zawodów co ma ułatwić im przyszły wybór pracy. Jeśli masz dobry kontakt z dziećmi i potrafisz prowadzić ciekawe zajęcia dołącz do nas!",
            "action_short_description": "Organizacja warsztatów chemicznych dla najmłodszych-stwórz własny krem!",
            "comments":"Wow, super pomysł!"
          },
          {
            "id": 16,
            "title": "Szukam początkującego fotografa do sesji zdjęciowej",
            "categories": [
              "Fotografia"
            ],
            "image": `${sesja}`,
            "amount": "1",
            "sign":"0",
            "action_description": "Jestem początkującą modelką, jeśli ty jesteś początkującym fotoghrafem- możemy sobie nawzajem pomóc w stworzeniu portfolio. Ja będę Ci pozować a ty zrobisz super zdjęcia i oboje będziemy zadowoleni",
            "action_short_description": "Szukam początkującego fotografa do sesji zdjęciowej-wzbogać swoje portflio!",
            "comments":"Udostępniłam koleżance :)"
          }
    ]

    export default Tasks;
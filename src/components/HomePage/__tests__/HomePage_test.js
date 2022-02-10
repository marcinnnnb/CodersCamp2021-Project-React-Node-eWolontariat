import { testingEnvironment } from "../../../testsEnv/testsEnv";
import App from "../../App/App";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../store/store";
import SectionHowItWorks from "../Sections/SectionHowItWorks";
import SectionTheBestVolunteers from "../Sections/SectionTheBestVolunteers";
import SectionHowFindHelp from "../Sections/SectionHowFindHelp";
import SectionInNumbers from "../Sections/SectionInNumbers/SectionInNumbers";

const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </MemoryRouter>
  );

describe("HomePage",()=>{
    it("Should render correctly",()=>{
        const wrapper = shallow();
        expect(wrapper).toMatchSnapshot();
    });
});

it("Should render title of Section How It Works", ()=>{
    expect(wrapper.find(SectionHowItWorks).text()).toEqual("Zobacz jak to działa");
  });

it("Should render title of Section New Tasks", ()=>{
    expect(wrapper.find(SectionHowItWorks).text()).toEqual("Zobacz jakiej pomocy potrzebują inni");
    expect(wrapper.find(SectionHowItWorks).text()).toEqual("Znajdź wolontariusza");
    expect(wrapper.find(SectionHowItWorks).text()).toEqual("Napisz czego Ci potrzeba i stwórz zadanie");
    expect(wrapper.find(SectionHowItWorks).text()).toEqual("Zostań wolontariuszem");
    expect(wrapper.find(SectionHowItWorks).text()).toEqual("Załóż profil wolontariusza i zacznij pomagać");
  });

it("Should render title of Section The Best Volunteers", ()=>{
    expect(wrapper.find(SectionTheBestVolunteers).text()).toEqual("Najbardziej aktywni wolontariusze");
    
  });

it("Should render title of Section How Find Help", ()=>{
    expect(wrapper.find(SectionHowFindHelp).text()).toEqual("Jak znaleźć pomoc na pomocny.pl");
    expect(wrapper.find(SectionHowFindHelp).text()).toEqual("Pomocny.pl to nie tylko strona z ogłoszeniami dotyczącymi wolontariatu. To miejsce spotkań ludzi, którzy potrzebują przestrzeni na rozmowę o tym jak można im pomóc. Jeżeli jesteś w trudnej sytuacji i jest coś, w czym można Cię wesprzeć, możesz stworzyć nowe zadanie lub odezwać się bezpośrednio do któregoś z wolontariuszy.");
    expect(wrapper.find(SectionHowFindHelp).text()).toEqual("Krok 1.");
    expect(wrapper.find(SectionHowFindHelp).text()).toEqual("Krok 2.");
    expect(wrapper.find(SectionHowFindHelp).text()).toEqual("Krok 3.");
    expect(wrapper.find(SectionHowFindHelp).text()).toEqual("Aby rozpocząć kliknij przycisk Stwórz zadanie.");
    expect(wrapper.find(SectionHowFindHelp).text()).toEqual("Zostaniesz przekierowany do formularza, który poprowadzi Cię dalej. W podpowiednich miejscach wpisz najważniejsze informacje dotyczące tworzonego przez Ciebie zadania: krótki opis tego, czego potrzebujesz oraz ilu wolontariuszy może się w to zaangażować. Możesz dodać również zdjęcie.");
    expect(wrapper.find(SectionHowFindHelp).text()).toEqual("Kiedy wolontariusz zgłosi się do Twojej akcji, zostaniesz o tym powiadomion_ mailowo.");

});

const b = wrapper.find('.MuiButton-root'); 


it ("Should render button Add new Task", ()=> {
    expect(b.text()).toEqual('Stwórz zadanie'); 

});

it("Should render text of Section In Numbers", ()=>{
    expect(wrapper.find(SectionInNumbers).text()).toEqual("w liczbach");
    expect(wrapper.find(SectionInNumbers).text()).toEqual("Tylu osobom pomogliśmy");
    expect(wrapper.find(SectionInNumbers).text()).toEqual("Tyle zadań zakończyło się sukcesem");
    expect(wrapper.find(SectionInNumbers).text()).toEqual("Tyle zgłosiło się wolontariuszy");
});

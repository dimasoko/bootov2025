import Header from '../components/Header';
import Footer from '../components/Footer';
import PageName from '../components/Text/PageName';
import TextBlock from '../components/Text/TextBlock';

const Contacts = () => {
  return (
    <div>
      <Header />
      <PageName text="Контакты"/>
      <TextBlock paragraphs={[
        "адрес:",
        "россия, г. bарнаул, ул. shевченко, 154, 656054",
        "время работы:",
        "бассейны 10-21, остальные зоны 8-22 без обеда и выходных",
        "номер телефона, в том числе по вопросам трудоустройства:",
        "8(913)090-22-10 ( мама владельца )",
        "почта:",
        "wedontknowhowtodo@busyness.com ( в рабочее время не писать )"
      ]}/>
      <Footer />
    </div>
  );
};

export default Contacts; 
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageName from '../../presentation/components/ui/Text/PageName';
import TextBlock from '../../presentation/components/ui/Text/TextBlock';

const ContactsPage = () => {
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

export default ContactsPage; 
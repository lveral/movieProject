import './App.css'
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/paragraph';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <div className='search'>
        <Header text='Поиск' />
        <Paragraph size='size16' text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.' />
        <Input placeholder='Введите название' className='icon-search'></Input>
        <Button text='Искать' />
        <Input placeholder='Ваше имя'></Input>
      </div>
    </>

  )
}

export default App

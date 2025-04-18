import './App.css'
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/paragraph';
import Header from './components/Header/Header';

function App() {

  return (
    <div className='search'>
      <Header text='Поиск' />
      <Paragraph size='size16' text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.' />
      <Button text='Искать' />
    </div>
  )
}

export default App

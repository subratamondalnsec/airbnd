import Header from './components/layout/Header/Header';
import ListingPage from './pages/ListingPage/ListingPage';
import './index.css';

export default function App() {
  return (
    <>
      <a className="skip-to-content" href="#main">Skip to main content</a>
      <Header />
      <ListingPage />
    </>
  );
}

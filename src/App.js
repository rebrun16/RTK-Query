import { Routes, Route } from 'react-router-dom';

import FullProfile from './components/FullProfile';
import UsersList from './components/UsersList';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="/new" element={<UserForm />} />
      <Route path="/edit/:id" element={<UserForm />} />
      <Route path="/users/:id" element={<FullProfile />} />
    </Routes>
  );
};

export default App;

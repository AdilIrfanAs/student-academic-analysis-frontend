import React, { Suspense, FC, ComponentType } from 'react';
import routes from './routes';
import { useNavigate, useLocation, Routes, Route, NavigateFunction, Location } from "react-router-dom";
import './App.css';

// Adjusted RouteItem interface
interface RouteItem {
  path: string;
  exact: any;
  access?: boolean;  // Added this based on the error message
  title?: string;
  layout: ComponentType<any>; // Changed this to ComponentType to support both class and functional components
  component: FC<{ navigation: NavigateFunction; location: Location }>;
}

const App: FC = () => {
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <React.Fragment>
      <Suspense fallback={'Loading...'}>
        <div>
          <Routes>
            {
              routes.map((route: RouteItem, index: number) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <route.layout title={route.title}>
                      <route.component navigation={navigation} location={location} />
                    </route.layout>
                  }
                />
              ))
            }
          </Routes>
        </div>
      </Suspense>
    </React.Fragment>
  );
}

export default App;

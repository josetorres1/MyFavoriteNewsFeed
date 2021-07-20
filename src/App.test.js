import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/lib/persistStore";

test("renders learn react link", async () => {
  const persistor = persistStore(store);
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
  expect(await screen.findByText(/new posts/i)).toBeInTheDocument();
  // expect(screen.getByText(/New posts/i)).toBeInTheDocument()
});

import React from "react";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Modal from "../components/Modal/Modal";
import userEvent from "@testing-library/user-event";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("component Modal", () => {
  it("should render properly", () => {
    const store = mockStore({});

    const { getByRole } = render(
      <Provider store={store}>
        <Modal title="Some title" />
      </Provider>
    );

    expect(getByRole("heading")).toBeVisible();
    expect(getByRole("button", { name: /ok/i })).toBeVisible();
    expect(getByRole("button", { name: /cancel/i })).toBeVisible();
  });

  it("should call onClick callback when button Ok clicked", () => {
    const mockOnClose = jest.fn();
    const store = mockStore({});

    const { getByRole } = render(
      <Provider store={store}>
        <Modal id={1} title="Some title" onClose={mockOnClose} />
      </Provider>
    );

    const button = getByRole("button", { name: /ok/i });
    userEvent.click(button);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should dispatch ADD_TO_CART action", () => {
    const onClose = jest.fn();
    const store = mockStore({});

    const { getByRole } = render(
      <Provider store={store}>
        <Modal id={1} title="Some title" onClose={onClose} />
      </Provider>
    );

    const button = getByRole("button", { name: /ok/i });
    userEvent.click(button);
    const action = store.getActions()[0];
    expect(action).toEqual({ type: "ADD_TO_CART", payload: 1 });
  });

  it("should dispatch REMOVE_FROM_CART action", () => {
    const onClose = jest.fn();
    const store = mockStore({});

    const { getByRole } = render(
      <Provider store={store}>
        <Modal id={1} text="Remove item from cart?" onClose={onClose} />
      </Provider>
    );

    const button = getByRole("button", { name: /ok/i });
    userEvent.click(button);
    const action = store.getActions();

    expect(action).toEqual([{ type: "REMOVE_FROM_CART", payload: 1 }]);
  });

  it("should call onClick callback when button cancel clicked", () => {
    const mockOnClose = jest.fn();
    const store = mockStore({});

    const { getByRole } = render(
      <Provider store={store}>
        <Modal title="Some title" onClose={mockOnClose} />
      </Provider>
    );

    const button = getByRole("button", { name: /cancel/i });
    userEvent.click(button);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should call onClick callback when close button clicked", () => {
    const mockOnClose = jest.fn();
    const store = mockStore({});

    const { getByRole } = render(
      <Provider store={store}>
        <Modal title="Some title" onClose={mockOnClose} />
      </Provider>
    );

    const button = getByRole("button", { name: "✕" });
    userEvent.click(button);

    expect(mockOnClose).toHaveBeenCalled();
  });
});

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import useFetch from "./hooks/fetch";
import App from "./App";

const url = "https://jsonplaceholder.typicode.com/users";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("useFetch hook", () => {
  test(`get user api`, async () => {
    const { result } = renderHook(() => useFetch(url));
    await new Promise((r) => setTimeout(r, 3000));
    await waitFor(() => expect(result.current.data).toHaveLength(10));
  });
});

describe("test the UI", () => {
  test("check the first perosn in UI", async () => {
    render(<App />);
    const { result } = renderHook(() => useFetch(url));
    await waitFor(() => {
      const linkElement = screen.getByText(result.current.data[0].name);
      expect(linkElement).toBeInTheDocument();
    });
  });
});

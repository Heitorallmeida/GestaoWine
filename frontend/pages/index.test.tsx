// "use client";

// import "@testing-library/jest-dom";
// import { act, fireEvent, render } from "@testing-library/react";
// import Home from ".";
// import * as useDataObject from "../hooks/useData";
// global.ResizeObserver = require("resize-observer-polyfill");

// // const useDataObject = { useData };
// const mockedWindowAlert = jest.fn();
// window.alert = mockedWindowAlert;

// jest.mock("../hooks/useData", () => {
//   return {
//     __esModule: true, //    <----- this __esModule: true is important
//     ...jest.requireActual("../hooks/useData"),
//   };
// });

// const setup = () => render(<Home />);

// const mockedSetNumberOfDays = jest.fn();

// const useDataReturn = {
//   pieChartData: "14",
//   linearChart: [],
//   barChartData: [],
//   numberOfDays: 7,
//   setNumberOfDays: mockedSetNumberOfDays,
//   fetchGraphData: jest.fn(),
// };

// jest.spyOn(useDataObject, "useData").mockReturnValue(useDataReturn);

// jest.mock("axios", () => ({
//   post: jest
//     .fn()
//     .mockResolvedValue({ data: { prediction: { "2021-09-01": 10 } } }),
//   get: jest.fn().mockRejectedValue({}),
// }));

// jest.mock("recharts", () => {
//   const OriginalModule = jest.requireActual("recharts");
//   return {
//     ...OriginalModule,
//     ResponsiveContainer: ({ children }: any) => (
//       <OriginalModule.ResponsiveContainer width={800} height={800}>
//         {children}
//       </OriginalModule.ResponsiveContainer>
//     ),
//     ResizeObserver: jest.fn(),
//   };
// });

// describe("Page", () => {
//   it("should render title", () => {
//     jest.mock("../hooks/useData", () => {
//       return {
//         __esModule: true, //    <----- this __esModule: true is important
//         ...jest.requireActual("../hooks/useData"),
//         ...useDataReturn,
//       };
//     });
//     jest.spyOn(useDataObject, "useData").mockImplementation(() => ({
//       pieChartData: "14",
//       linearChart: [],
//       barChartData: [],
//       numberOfDays: 7,
//       setNumberOfDays: jest.fn(),
//       fetchGraphData: jest.fn(),
//     }));

//     const { getByText } = setup();

//     const heading = getByText(
//       /Gerenciando sua loja: superando os desafios do seu negócio/i
//     );

//     expect(heading).toBeInTheDocument();
//   });

//   it("should update number of days", () => {
//     jest.mock("../hooks/useData", () => {
//       return {
//         __esModule: true, //    <----- this __esModule: true is important
//         ...jest.requireActual("../hooks/useData"),
//         ...useDataReturn,
//       };
//     });
//     const mock = jest.fn();
//     jest.spyOn(useDataObject, "useData").mockImplementation(() => ({
//       pieChartData: "14",
//       linearChart: [],
//       barChartData: [],
//       numberOfDays: 7,
//       setNumberOfDays: mock,
//       fetchGraphData: jest.fn(),
//     }));
//     const { getByRole } = setup();

//     const input = getByRole("textbox", { name: "" });

//     act(() => fireEvent.change(input, { target: { value: 10 } }));

//     expect(mock).toHaveBeenCalled();

//     act(() => fireEvent.change(input, { target: { value: 130 } }));

//     expect(mockedWindowAlert).toHaveBeenCalled();

//     act(() => fireEvent.change(input, { target: { value: -1 } }));

//     expect(mockedWindowAlert).toHaveBeenCalled();
//   });
// });

const Index = () => {};
export default Index;

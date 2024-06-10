import { useCallback, useEffect, useState } from "react";
import { axios } from "../pages/utils";
type UseDataReturn = {
  pieChartData: string | undefined;
  linearChart: any[] | undefined;
  barChartData: any[] | undefined;
  numberOfDays: number;
  setNumberOfDays: React.Dispatch<React.SetStateAction<number>>;
  fetchGraphData: (days: number) => Promise<void>;
};

const api = process.env.NEXT_PUBLIC_API_URL;
export function useData(): UseDataReturn {
  const [pieChartData, setPieChartData] = useState<string | undefined>();
  const [linearChart, setLinearChart] = useState<any[] | undefined>();
  const [barChartData, setBarChartData] = useState<any[] | undefined>();
  const [numberOfDays, setNumberOfDays] = useState(7);
  function dataAtualFormatada(date: Date) {
    var data = date,
      dia = data.getDate().toString().padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
      ano = data.getFullYear();

    return dia + "/" + mes + "/" + ano;
  }

  const fetchGraphData = useCallback(async (days: number) => {
    try {
      const responseForeCast = await axios.post(`${api}/api/predict/forecast`, {
        numberofdays: days,
      });
      const forecast = await responseForeCast.data?.prediction;
      const forecastKeys = Object.keys(forecast);
      const convertedForeCast = forecastKeys.map((key) => {
        return {
          name: dataAtualFormatada(new Date(key)),
          vendas: forecast[key].toFixed(),
        };
      });
      setLinearChart(convertedForeCast);

      const responseForeCastByMonth = await axios.post(
        `${api}/api/predict/forecast/by-month`,
        { numberofdays: 120 }
      );
      const monthForecast = await responseForeCastByMonth.data
        ?.monthly_forecast;

      const data = [
        {
          name: "Mes 1",
          venda: monthForecast[0].toFixed(),
        },
        {
          name: "Mes 2",
          venda: monthForecast[1].toFixed(),
        },
        {
          name: "Mes 3",
          venda: monthForecast[2].toFixed(),
        },
        {
          name: "Mes 4",
          venda: monthForecast[3].toFixed(),
        },
      ];
      setBarChartData(data);

      const responseAccuracy = await axios.get(`${api}/api/accuracy`);
      const accuracy = await responseAccuracy.data?.accuracy;
      setPieChartData(accuracy);
    } catch (error) {
      //   console.info(error)
    }
  }, []);

  useEffect(() => {
    void fetchGraphData(numberOfDays);
  }, [fetchGraphData, numberOfDays]);

  return {
    pieChartData,
    linearChart,
    barChartData,
    numberOfDays,
    setNumberOfDays,
    fetchGraphData,
  };
}

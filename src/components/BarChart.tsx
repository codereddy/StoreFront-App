import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useStore } from '../context/StoreContext';
import useFetch from '../hooks/useFetch';

const BarChart: React.FC = () => {
  const { category, chartView } = useStore();
  const { data: products, loading, error } = useFetch(`https://fakestoreapi.com/products/category/${category}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const chartData = products?.map((prod: { title: string; price: number; rating: { rate: number } }) => ({
    name: prod.title,
    y: chartView === 'Price' ? prod.price : prod.rating.rate
  })) || [];

  const options = {
    title: {
      text: ''
    },
    chart: {
      type: 'column', 
    },
    xAxis: {
      categories: products?.map((prod: { title: string }) => prod.title) || [],
      
    },
    yAxis: {
      title: {
        text: chartView === 'Price' ? 'Price' : 'Rating'
      },
      tickInterval: 250,
    },
    series: [
      {
        name: chartView === 'Price' ? 'Price' : 'Rating',
        data: chartData,
        color: '#5c94ed'
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;

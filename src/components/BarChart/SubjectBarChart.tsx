import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { baseUrl, subjects } from '../../config';

const SubjectBarChart = () => {
  const [averageScores, setAverageScores] = useState([]);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const apiUrl = `${baseUrl}record/subject-average`;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subjects }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('API request failed');
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setAverageScores(data.averageScores);
        } else {
          throw new Error('API request unsuccessful');
        }
      })
      .catch((error) => {
        throw new Error(`API request error: ${error}`);
      });
  }, []);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option: any = {
      xAxis: {
        type: 'category',
        data: averageScores.map((record) => record.subject), // Extract subject names
        axisLabel: {
          textStyle: {
            color: '#fff' // Change the text color to red
          }
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#fff' // Change the text color to red
          }
        },
      },
      tooltip: {  // Add this tooltip configuration
        trigger: 'axis', // Trigger on bar hover
        formatter: '{b}: {c}%', // Display subject and value
      },
      series: [
        {
          name: 'Data',
          type: 'bar',
          data: averageScores.map((record) => record.averagePercentageScore),
          itemStyle: {
            color: function (params: any) {
              // You can set a specific color for each data point
              const colors = ['#4158D0', '#4158D0', '#4158D0', '#4158D0', '#4158D0', '#4158D0'];
              return colors[params.dataIndex];
            },
          },
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [averageScores]);


  return (
    <div className='main-graph-section sm:py-70 py-50 sm:px-30 px-0'>
      <div className="text-center text-purple mb-50">
        <h2 className="md:text-36 sm:text-30 text-20 uppercase md:leading-40 sm:leading-34 leading-26 font-bold user-select-none">
          Subject Score Analysis
        </h2>
      </div>
      <div className='main-graph bg-card rounded-8 py-50 px-30 text-white overflow-x-auto'>
        <div
          className="min-w-1300  flex justify-center"
          ref={chartRef}
          style={{ width: '100%', height: '400px' }}
        />
      </div>
    </div>
  );
};

export default SubjectBarChart;

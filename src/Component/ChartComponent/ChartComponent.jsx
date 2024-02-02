import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Select, Box, Heading, FormControl } from '@chakra-ui/react';
import { BeatLoader } from "react-spinners";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const generateRandomData = () => {
  return labels.map(() => Math.floor(Math.random() * 1000));
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sales analytics',
    },
  },
};

const initialData = {
  labels,
  datasets: [
    {
      label: '2021',
      data: generateRandomData(),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '2022',
      data: generateRandomData(),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: '2023',
      data: generateRandomData(),
      backgroundColor: 'rgb(128,0,125)',
    },
  ],
};

const ChartComponent = () => {
  const [selectedOption, setSelectedOption] = useState('showAll');
  const [chartData, setChartData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const handleOptionChange = (option) => {
    // Show loading indicator
    setLoading(true);

    // Simulate delay with setTimeout
    setTimeout(() => {
      // Update the chart data and title based on the selected option
      if (option === 'showAll') {
        setChartData(initialData);
        options.plugins.title.text = 'Sales analytics';
      } else if (option === 'Year2021' || option === 'Year2022' || option === 'Year2023') {
        setChartData({
          labels,
          datasets: [
            {
              label: option,
              data: generateRandomData(),
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        });
        options.plugins.title.text = 'Sales analytics';
      }

      // Hide loading indicator after updating data
      setLoading(false);
    }, 1000); // Adjust the delay time as needed
  };

  return (
    <Box p={{ base: 4, md: 8 }} borderRadius="md" boxShadow="md" position="relative">
      <Heading as="h3" size="lg" mb={4}>
        Chart
      </Heading>
      <FormControl>
        <Select
          onChange={(e) => {
            setSelectedOption(e.target.value);
            handleOptionChange(e.target.value);
          }}
          w={200}
        >
          <option value="showAll">Show All</option>
          <option value="Year2021">Year 2021</option>
          <option value="Year2022">Year 2022</option>
          <option value="Year2023">Year 2023</option>
          {/* Add more options based on your requirements */}
        </Select>
      </FormControl>
      <Box mt={4} position="relative">
        {loading && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <BeatLoader size={30} color="#8899A6" />
          </Box>
        )}
        <Bar options={options} data={chartData} />
      </Box>
    </Box>
  );
};

export default ChartComponent;

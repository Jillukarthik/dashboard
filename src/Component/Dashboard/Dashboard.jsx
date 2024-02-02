import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../Header/Header'
import ChartComponent from '../ChartComponent/ChartComponent'
import SortableTable from '../Reusable/SortableTable'
import ChoroplethMap from '../ChoroplethMap/ChoroplethMap'
import { useLocation } from 'react-router-dom'

function Dashboard() {

  const location=useLocation()
  console.log(location)
    const data = [
        {
          name: 'John Doe',
          age: 30,
          address: {
            city: 'New York',
            country: 'USA',
          },
        },
        {
          name: 'Leanne Graham',
          age: 28,
          address: {
            city: 'London',
            country: 'UK',
          },
        },
        {
            name: 'Ervin Howell',
            age: 25,
            address: {
              city: 'London',
              country: 'UK',
            },
          },
          {
            name: 'Clementine Bauch',
            age: 25,
            address: {
              city: 'London',
              country: 'UK',
            },
          },
          {
            name: 'Patricia Lebsack',
            age: 25,
            address: {
              city: 'London',
              country: 'UK',
            },
          },
          {
            name: 'Chelsey Dietrich',
            age: 25,
            address: {
              city: 'London',
              country: 'UK',
            },
          },
          {
            name: 'Mrs. Dennis Schulist',
            age: 25,
            address: {
              city: 'London',
              country: 'UK',
            },
          },
      ];
      
  return (
   <Box>
    <Header/>
    <ChartComponent/>
    <SortableTable data={data} />
    <ChoroplethMap/>
   </Box>
  )
}

export default Dashboard
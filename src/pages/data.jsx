import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import client from '../apollo';
import Emoji from 'react-emoji-render';
import flags from 'emoji-flags';


const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      currency
      capital
    }
  }
`;

function CountryList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES, { client });
  const [searchTerm, setSearchTerm] = useState('');
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filter data negara berdasarkan kata kunci pencarian
  const filteredCountries = data.countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Urutkan array negara berdasarkan nama negara (secara default urutan abjad)
  filteredCountries.sort((a, b) => a.name.localeCompare(b.name));

  // Membuat array untuk menampung baris tabel
  const tableRows = filteredCountries.map((country, index) => (
    <tr key={index}>
      <td className="border px-4 py-2 flex flex-wrap justify-center">{index + 1}</td>
      <td className="border px-4 py-2">{country.name}</td>
      <td className="border px-4 py-2">{country.currency}</td>
      <td className="border px-4 py-2">{country.capital}</td>
      <td className="border px-4 py-2">
      {flags[country.code].emoji}
      </td>
    </tr>
  ));

  // Mengembalikan tabel negara yang telah diurutkan
  return (
    <div className='container mx-auto'>
      <div className='flex flex-wrap mt-3' >
        <div className='ml-3' >
          <input
              type="text"
              placeholder="Search country..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="border rounded-md px-4 py-2 mb-4"
            />
        </div>
        <div className="">
          <table className="table-auto ml-3">
            <thead className='bg-gray-300' >
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Country</th>
                <th className="px-4 py-2 border">Currency</th>
                <th className="px-4 py-2 border">Capital</th>    
                <th className="px-4 py-2 border">Flag</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CountryList;

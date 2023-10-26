import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../config';

const MainTable = () => {
  const [studentRecords, setStudentRecords] = useState([]);

  useEffect(() => {
    const apiUrl = `${baseUrl}record/list`;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('API request failed');
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setStudentRecords(data.studentRecord);
        } else {
          throw new Error('API request unsuccessful');
        }
      })
      .catch((error) => {
        throw new Error(`API request error: ${error}`);
      });
  }, []);

  return (
    <div className='main-table-section sm:py-70 py-50 sm:px-30 px-0'>
      <div className="text-center text-purple mb-50">
        <h2 className="md:text-36 sm:text-30 uppercase text-20 md:leading-40 sm:leading-34 leading-26 font-bold user-select-none">
          Student Records
        </h2>
      </div>
      <div className='main-table bg-card rounded-8 py-50 px-30 text-white overflow-x-auto'>
        <div className="inline-block min-w-1300 w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Student Name</th>
                  <th scope="col" className="px-6 py-4">Subject</th>
                  <th scope="col" className="px-6 py-4">Score</th>
                  <th scope="col" className="px-6 py-4">Feedback</th>
                </tr>
              </thead>
              <tbody>
                {studentRecords.map((record, index) => (
                  <tr key={record._id} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{record.studentName}</td>
                    <td className="whitespace-nowrap px-6 py-4">{record.subject}</td>
                    <td className="whitespace-nowrap px-6 py-4">{record.score} out of {record.totalScore}</td>
                    <td className="whitespace-nowrap px-6 py-4">{record.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  );
};

export default MainTable;

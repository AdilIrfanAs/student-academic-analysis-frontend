import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../config';

const StudentSearch: React.FC = () => {
  const [studentNames, setStudentNames] = useState<string[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Fetch the list of student names when the component mounts
    const apiUrl = `${baseUrl}record/student-name`;

    fetch(apiUrl, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('API request failed');
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setStudentNames(data.studentNames);
        } else {
          throw new Error('API request unsuccessful');
        }
      })
      .catch((error) => {
        throw new Error(`API request error: ${error}`);
      });
  }, []);

  const handleStudentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    setSelectedStudent(value);
  };

  const handleSearch = () => {
    if (!selectedStudent) {
      return;
    }

    setIsLoading(true);

    const apiUrl = `${baseUrl}record/student-review`;

    const requestBody = {
      studentName: selectedStudent,
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('API request failed');
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setFeedbackText(data.extractedText);
        } else {
          throw new Error('API request unsuccessful');
        }
      })
      .catch((error) => {
        throw new Error(`API request error: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="student-search sm:py-70 py-50 sm:px-30 px-0">
      <div className="text-center text-purple mb-50">
        <h2 className="md:text-36 sm:text-30 uppercase text-20 md:leading-40 sm:leading-34 leading-26 font-bold user-select-none">
          Generate Student Analysis
        </h2>
      </div>
      <div className='bg-card rounded-8 py-50 px-30 text-white overflow-x-auto'>
        <form>
          <div className="flex sm:flex-row flex-col justify-start sm:items-end items-center mb-5">
            <div
              className="relative sm:mb-0 mb-3 sm:min-w-300 min-w-full"
              data-te-input-wrapper-init
            >
              <label className="text-white mb-2 block">Students</label>
              <select
                data-te-select-init
                className="bg-input h-45 rounded border-0 w-full text-white p-12 block w-full focus:outline-none"
                value={selectedStudent}
                onChange={handleStudentChange}
              >
                <option value="">Select a Student</option>
                {studentNames.map((student) => (
                  <option key={student} value={student}>
                    {student}
                  </option>
                ))}
              </select>
            </div>
            <div className="button text-end ms-12">
              <button
                type="button"
                className="inline-block rounded uppercase transition duration-150 ease-in-out bg-gradient hover:bg-gradient-2 text-white py-3 px-10"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={handleSearch}
                disabled={isLoading} // Disable the button while loading
              >
                {isLoading ? <div className="loader w-24 h-24 rounded-half border-solid border border-white border-t-0 border-2"></div> : 'Search'}
              </button>
            </div>
          </div>
          <div className="relative" data-te-input-wrapper-init>
            <textarea
              className={`w-full text-white p-12 h-200 rounded border-0 bg-input transition duration-150 ease-in-out focus:outline-none resize-none ${feedbackText ? 'active' : ''}`}
              id="exampleFormControlInput1"
              placeholder="Review Box..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentSearch;

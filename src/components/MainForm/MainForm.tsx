import React, { useState, ChangeEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Images } from '../../assets/assets';
import { baseUrl, subjects, defaultSubject } from '../../config';

interface FormData {
  studentName: string;
  subject: string;
  score: string;
  totalScore: string;
  feedback: string;
}

const MainForm: React.FC = () => {
  const initialFormData: FormData = {
    studentName: '',
    subject: defaultSubject,
    score: '',
    totalScore: '',
    feedback: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const notify = () => toast.success("Feedback submitted successfully!");
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student Name is required';
    }

    const score = parseFloat(formData.score);
    const totalScore = parseFloat(formData.totalScore);

    if (isNaN(score) || isNaN(totalScore)) {
      newErrors.score = 'Score and Total Score must be numbers';
      newErrors.totalScore = 'Score and Total Score must be numbers';
    } else if (score < 0 || score > totalScore) {
      newErrors.score = 'Score must be between 0 and Total Score';
    }

    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Feedback is required';
    }

    if (Object.keys(newErrors).length === 0) {
      const apiUrl = `${baseUrl}record/create`;

      const requestBody = {
        studentName: formData.studentName,
        subject: formData.subject,
        score: score,
        totalScore: totalScore,
        feedback: formData.feedback,
      };

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (response.ok) {
            notify();
          } else {
            throw new Error('API request failed');
          }
        })
        .catch((error) => {
          throw new Error(`API request error: ${error}`);
        });
      setFormData(initialFormData);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='main-form'>
      <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div className="shrink-1 grow-0 basis-auto md:w-12/12 md:shrink-0 lg:w-6/12 xl:w-6/12 mb-5 lg:mb-0">
          <div className="text-center text-purple mb-50">
            <h2 className="md:text-36 sm:text-30 text-20 uppercase md:leading-40 sm:leading-34 leading-26 font-bold user-select-none">
              Submit Feedback
            </h2>
          </div>
          <ToastContainer />
          <div className="max-w-704 mx-auto">
            <img src={Images.formImg} className="w-full h-auto" alt="submit feedback" />
          </div>
        </div >
        <div className=" md:mb-0 w-full lg:w-5/12 xl:w-5/12">
          <div className="card bg-card rounded-8 sm:py-50 py-30 sm:px-30 px-12">
            <div className="relative mb-3" data-te-input-wrapper-init>
              <label className='text-white mb-2 block'>Student Name</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full text-white p-12 h-45 rounded border-0 bg-input focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Enter Student Name"
              />
              {errors.studentName && <div className="text-red-500">{errors.studentName}</div>}
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <label className='text-white mb-2 block'>Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                data-te-select-init
                className='bg-input h-45 rounded border-0 text-white p-12 block w-full focus:outline-none'
              >
                {
                  subjects?.map((subject, index) => {
                    return <option key={index} value={subject}>{subject}</option>
                  })
                }
              </select>
            </div>

            <div className="relative mb-3" data-te-input-wrapper-init>
              <label className='text-white mb-2 block'>Score</label>
              <input
                type="number"
                name="score"
                value={formData.score}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === '-' || e.key === 'e') {
                    e.preventDefault();
                  }
                }}
                className="w-full text-white p-12 h-45 rounded border-0 bg-input focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Enter Score"
              />
              {errors.score && <div className="text-red-500">{errors.score}</div>}
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <label className='text-white mb-2 block'>Total Score</label>
              <input
                type="number"
                name="totalScore"
                value={formData.totalScore}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === '-' || e.key === 'e') {
                    e.preventDefault();
                  }
                }}
                className="w-full text-white p-12 h-45 rounded border-0 bg-input focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Enter Total Score"
              />
              {errors.totalScore && <div className="text-red-500">{errors.totalScore}</div>}
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <label className='text-white mb-2 block'>Feedback</label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                className="w-full text-white p-12 h-200 rounded border-0 bg-input focus:outline-none resize-none"
                id="exampleFormControlInput1"
                placeholder="Enter here..."
              />
              {errors.feedback && <div className="text-red-500">{errors.feedback}</div>}
            </div>
            <div className='button text-end'>
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-block rounded uppercase transition duration-150 ease-in-out bg-gradient hover:bg-gradient-2 text-white py-3 px-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default MainForm;

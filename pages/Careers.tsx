import React from 'react';
import { MOCK_CAREERS_DB } from '../api/mock-data';
import { CareerPost } from '../types';

const Careers: React.FC = () => {
    const careers: CareerPost[] = MOCK_CAREERS_DB;

  return (
    <div className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Join Our Team</h1>
          <p className="text-lg text-gray-600 mt-2">
            We are always looking for talented individuals to help us innovate and grow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
        {careers.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-xl font-bold text-blue-800">{job.position}</h2>
                        <p className="text-sm text-gray-500">{job.location}</p>
                    </div>
                    <button className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-md hover:bg-blue-700 transition duration-300">
                        Apply Now
                    </button>
                </div>
                <p className="text-gray-700 mt-4">{job.description}</p>
            </div>
        ))}
        </div>

        <div className="text-center mt-12">
            <p className="text-gray-600">Don't see a role that fits? Send your resume to <a href="mailto:marutitooling@gmail.com" className="text-blue-600 hover:underline font-semibold">marutitooling@gmail.com</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Careers;

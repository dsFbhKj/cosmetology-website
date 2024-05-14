import Image from "next/image";
import Link from "next/link";

export default function Verify() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold mb-8">Verification</h1>
      <p className="text-gray-600 mb-6">This section allows you to verify and add information</p>

      <div className="mb-8">
        <p className="text-lg font-semibold mb-4">Are you a student or teacher?</p>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input type="radio" name="role" id="student" className="form-radio h-5 w-5 text-blue-600" />
            <label htmlFor="student" className="ml-2 text-gray-700">Student</label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="role" id="teacher" className="form-radio h-5 w-5 text-blue-600" />
            <label htmlFor="teacher" className="ml-2 text-gray-700">Teacher</label>
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold mb-4">Choose a Session</p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <input type="radio" name="session" id="session1" className="form-radio h-5 w-5 text-blue-600" />
            <label htmlFor="session1" className="ml-2 text-gray-700">1st Year: 12:00 PM - 5:00 PM</label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="session" id="session2" className="form-radio h-5 w-5 text-blue-600" />
            <label htmlFor="session2" className="ml-2 text-gray-700">2nd Year, Session 1: 12:00 PM - 5:00 PM</label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="session" id="session3" className="form-radio h-5 w-5 text-blue-600" />
            <label htmlFor="session3" className="ml-2 text-gray-700">2nd Year, Session 2: 7:00 AM - 12:00 PM</label>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ lang, setUsername }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      if (email === "ahmed@gmail.com" && password === "123") {
        setUsername("أحمد"); // ✅ مهم: تفعيل المستخدم لتظهر لوحة التحكم والسايدبار
        navigate("/");
       
      } else {
        setError(
          lang === "ar"
            ? "البريد الإلكتروني أو كلمة المرور غير صحيحة"
            : "Incorrect email or password"
        );
      }
    } else {
      setError(
        lang === "ar" ? "من فضلك أدخل جميع البيانات" : "Please enter all fields"
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {lang === "ar" ? "تسجيل الدخول" : "Login"}
        </h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {lang === "ar" ? "البريد الإلكتروني" : "Email"}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder={
                lang === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"
              }
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              {lang === "ar" ? "كلمة المرور" : "Password"}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder={
                lang === "ar" ? "أدخل كلمة المرور" : "Enter your password"
              }
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {lang === "ar" ? "تسجيل الدخول" : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-blue-600 hover:text-blue-700"
          >
            {lang === "ar" ? "نسيت كلمة المرور؟" : "Forgot password?"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

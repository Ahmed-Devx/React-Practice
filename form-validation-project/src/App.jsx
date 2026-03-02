import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (formData.username.length < 8) {
      newErrors.username = "Username must be at least 8 characters.";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (
      formData.password !== formData.confirmPassword ||
      !formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration Successful! 🎉");
    }
  };

  const inputClass = (fieldName) => `
    w-full bg-zinc-800/50 border-2 p-3 rounded-xl outline-none transition-all duration-300 text-white
    ${errors[fieldName] ? "border-red-500/50 focus:border-red-500" : "border-zinc-700 focus:border-blue-500"}
  `;

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Create Account
          </h2>
          <p className="text-zinc-500 mt-2">Join the future of development</p>
        </header>

        <form onSubmit={validate} className="space-y-5">
          <div>
            <input
              name="username"
              type="text"
              placeholder="Username"
              className={inputClass("username")}
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-400 text-xs mt-2 ml-1 italic">
                {errors.username}
              </p>
            )}
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className={inputClass("email")}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-2 ml-1 italic">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={inputClass("password")}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-2 ml-1 italic">
                {errors.password}
              </p>
            )}
          </div>

          <div>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className={inputClass("confirmPassword")}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-2 ml-1 italic">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] mt-4"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

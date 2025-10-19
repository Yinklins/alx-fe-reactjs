import { useState } from "react";

const RegistrationForm = () => {
  // Destructure state for direct use in value={}
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData; // ✅ This fixes the error

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form Submitted Successfully:", formData);
    setFormData({ username: "", email: "", password: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">User Registration</h2>

      <div className="mb-3">
        <label className="block font-medium">Username</label>
        <input
          type="text"
          name="username"
          value={username}      // ✅ Now matches test condition
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
      </div>

      <div className="mb-3">
        <label className="block font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={email}          // ✅ Now matches test condition
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-3">
        <label className="block font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={password}       // ✅ Now matches test condition
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
